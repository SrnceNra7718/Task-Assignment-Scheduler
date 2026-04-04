import { useState, useCallback } from "react";
import { format, getDaysInMonth, getDay } from "date-fns";
import { toast } from "sonner";
import { supabase } from "../../../lib/supabase";
import { EventType } from "../../../types/database";

interface GenerateEventsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  eventTypes: EventType[];
}

export function GenerateEventsModal({
  isOpen,
  onClose,
  onSuccess,
  eventTypes,
}: Readonly<GenerateEventsModalProps>) {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1); // 1-12
  const [midweekDay, setMidweekDay] = useState(3); // Wednesday (1=Mon..5=Fri)
  const [weekendDay, setWeekendDay] = useState(0); // Sunday (0=Sun,6=Sat)
  const [generating, setGenerating] = useState(false);

  const getEventTypeIdByName = useCallback(
    (name: string): string | undefined => {
      const eventType = eventTypes.find((et) => et.name === name);
      return eventType?.id;
    },
    [eventTypes],
  );

  const generateMonthlyEvents = useCallback(async () => {
    const midweekTypeId = getEventTypeIdByName("MIDWEEK");
    const weekendTypeId = getEventTypeIdByName("WEEKEND");

    if (!midweekTypeId || !weekendTypeId) {
      toast.error(
        'Event types "MIDWEEK" and "WEEKEND" must exist in the database',
      );
      return;
    }

    setGenerating(true);
    const daysInMonth = getDaysInMonth(new Date(year, month - 1));
    const eventsToInsert: Array<{
      event_date: string;
      event_type_id: string;
      month: number;
      year: number;
    }> = [];

    // Iterate over each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month - 1, day);
      const dayOfWeek = getDay(date); // 0=Sun .. 6=Sat
      let eventTypeId: string | null = null;

      if (dayOfWeek === weekendDay) {
        eventTypeId = weekendTypeId;
      } else if (dayOfWeek === midweekDay) {
        eventTypeId = midweekTypeId;
      }

      if (eventTypeId) {
        eventsToInsert.push({
          event_date: format(date, "yyyy-MM-dd"),
          event_type_id: eventTypeId,
          month,
          year,
        });
      }
    }

    if (eventsToInsert.length === 0) {
      toast.info("No dates matched the selected weekdays for this month");
      setGenerating(false);
      onClose();
      return;
    }

    // Fetch existing events for the same month/year to avoid duplicates
    const { data: existingEvents } = await supabase
      .from("events")
      .select("event_date")
      .eq("month", month)
      .eq("year", year);

    const existingDates = new Set(
      existingEvents?.map((e) =>
        format(new Date(e.event_date), "yyyy-MM-dd"),
      ) || [],
    );

    const uniqueEventsToInsert = eventsToInsert.filter(
      (e) => !existingDates.has(e.event_date),
    );

    if (uniqueEventsToInsert.length === 0) {
      toast.info("All generated events already exist for this month");
      setGenerating(false);
      onClose();
      return;
    }

    // Insert in batches
    const batchSize = 20;
    let insertedCount = 0;
    let errorCount = 0;

    for (let i = 0; i < uniqueEventsToInsert.length; i += batchSize) {
      const batch = uniqueEventsToInsert.slice(i, i + batchSize);
      const { error } = await supabase.from("events").insert(batch);
      if (error) {
        console.error("Batch insert error:", error);
        errorCount += batch.length;
      } else {
        insertedCount += batch.length;
      }
    }

    if (errorCount > 0) {
      toast.warning(
        `Added ${insertedCount} events, but ${errorCount} failed due to conflicts or errors.`,
      );
    } else {
      toast.success(
        `Successfully added ${insertedCount} events for ${format(
          new Date(year, month - 1),
          "MMMM yyyy",
        )}`,
      );
    }

    setGenerating(false);
    onSuccess(); // Refresh parent data
    onClose();
  }, [
    year,
    month,
    midweekDay,
    weekendDay,
    getEventTypeIdByName,
    onSuccess,
    onClose,
  ]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Generate Monthly Events
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close"
          >
            <span className="text-gray-500 text-xl">×</span>
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="year"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Year
              </label>
              <input
                id="year"
                type="number"
                min={2000}
                max={2100}
                value={year}
                onChange={(e) =>
                  setYear(
                    Number.parseInt(e.target.value) || new Date().getFullYear(),
                  )
                }
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="month"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Month
              </label>
              <select
                id="month"
                value={month}
                onChange={(e) => setMonth(Number.parseInt(e.target.value))}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                  <option key={m} value={m}>
                    {new Date(2000, m - 1, 1).toLocaleString("default", {
                      month: "long",
                    })}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="midweek"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Midweek Day (Monday–Friday)
            </label>
            <select
              id="midweek"
              value={midweekDay}
              onChange={(e) => setMidweekDay(Number.parseInt(e.target.value))}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value={1}>Monday</option>
              <option value={2}>Tuesday</option>
              <option value={3}>Wednesday</option>
              <option value={4}>Thursday</option>
              <option value={5}>Friday</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="weekend"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Weekend Day (Saturday or Sunday)
            </label>
            <select
              id="weekend"
              value={weekendDay}
              onChange={(e) => setWeekendDay(Number.parseInt(e.target.value))}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value={0}>Sunday</option>
              <option value={6}>Saturday</option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={generateMonthlyEvents}
            disabled={generating}
            className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {generating ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Generating...
              </div>
            ) : (
              "Generate Events"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
