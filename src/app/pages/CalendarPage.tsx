import { useState, useEffect, useCallback } from "react";
import { supabase } from "../../lib/supabase";
import { Event, EventType } from "../../types/database";
import { Plus, Trash2, CalendarPlus } from "lucide-react";
import { format, parseISO, getDaysInMonth, getDay } from "date-fns";
import { toast } from "sonner";

export default function CalendarPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [eventTypes, setEventTypes] = useState<EventType[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newEventDate, setNewEventDate] = useState("");
  const [newEventTypeId, setNewEventTypeId] = useState("");

  // State for bulk generation modal
  const [showGenerateModal, setShowGenerateModal] = useState(false);
  const [generateYear, setGenerateYear] = useState(new Date().getFullYear());
  const [generateMonth, setGenerateMonth] = useState(new Date().getMonth() + 1); // 1-12
  const [midweekDay, setMidweekDay] = useState(3); // Wednesday by default (1=Mon..5=Fri)
  const [weekendDay, setWeekendDay] = useState(0); // Sunday by default (0=Sun,6=Sat)
  const [generating, setGenerating] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setLoading(true);

      const [eventsRes, eventTypesRes] = await Promise.all([
        supabase
          .from("events")
          .select(
            `
            *,
            event_types (*)
          `,
          )
          .order("event_date", { ascending: false })
          .limit(100),
        supabase.from("event_types").select("*"),
      ]);

      setEvents(eventsRes.data || []);
      setEventTypes(eventTypesRes.data || []);

      if (eventTypesRes.data && eventTypesRes.data.length > 0) {
        setNewEventTypeId(eventTypesRes.data[0].id);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to load calendar data");
    } finally {
      setLoading(false);
    }
  }

  async function addEvent() {
    if (!newEventDate || !newEventTypeId) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const date = new Date(newEventDate);
      const { error } = await supabase.from("events").insert({
        event_date: newEventDate,
        event_type_id: newEventTypeId,
        month: date.getMonth() + 1,
        year: date.getFullYear(),
      });

      if (error) {
        if (error.code === "23505") {
          toast.error("An event already exists for this date");
        } else {
          throw error;
        }
        return;
      }

      toast.success("Event added successfully!");
      setShowAddModal(false);
      setNewEventDate("");
      fetchData();
    } catch (error) {
      console.error("Error adding event:", error);
      toast.error("Failed to add event");
    }
  }

  async function deleteEvent(event: Event) {
    if (
      !confirm(
        `Are you sure you want to delete the event on ${format(
          parseISO(event.event_date),
          "MMMM d, yyyy",
        )}? All assignments will be removed.`,
      )
    ) {
      return;
    }

    try {
      const { error } = await supabase
        .from("events")
        .delete()
        .eq("id", event.id);

      if (error) throw error;

      toast.success("Event deleted successfully!");
      fetchData();
    } catch (error) {
      console.error("Error deleting event:", error);
      toast.error("Failed to delete event");
    }
  }

  // Helper to get event_type_id by name
  const getEventTypeIdByName = useCallback(
    (name: string): string | undefined => {
      const eventType = eventTypes.find((et) => et.name === name);
      return eventType?.id;
    },
    [eventTypes],
  );

  // Bulk generate events for a month
  const generateMonthlyEvents = useCallback(async () => {
    if (!getEventTypeIdByName("MIDWEEK") || !getEventTypeIdByName("WEEKEND")) {
      toast.error(
        'Event types "MIDWEEK" and "WEEKEND" must exist in the database',
      );
      return;
    }

    setGenerating(true);
    const year = generateYear;
    const month = generateMonth; // 1-12
    const daysInMonth = getDaysInMonth(new Date(year, month - 1));
    const midweekDayNum = midweekDay; // 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri
    const weekendDayNum = weekendDay; // 0=Sun, 6=Sat

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
      let eventTypeName: string | null = null;

      // Check if this day matches the selected weekend day
      if (dayOfWeek === weekendDayNum) {
        eventTypeName = "WEEKEND";
      }
      // Check if this day matches the selected midweek day (converting: Mon=1 -> dayOfWeek=1, etc.)
      else if (dayOfWeek === midweekDayNum) {
        eventTypeName = "MIDWEEK";
      }

      if (eventTypeName) {
        const eventTypeId = getEventTypeIdByName(eventTypeName);
        if (eventTypeId) {
          const formattedDate = format(date, "yyyy-MM-dd");
          eventsToInsert.push({
            event_date: formattedDate,
            event_type_id: eventTypeId,
            month,
            year,
          });
        }
      }
    }

    if (eventsToInsert.length === 0) {
      toast.info("No dates matched the selected weekdays for this month");
      setGenerating(false);
      setShowGenerateModal(false);
      return;
    }

    // Check for existing events to avoid duplicates
    const existingDates = new Set(
      events.map((e) => format(parseISO(e.event_date), "yyyy-MM-dd")),
    );
    const uniqueEventsToInsert = eventsToInsert.filter(
      (e) => !existingDates.has(e.event_date),
    );

    if (uniqueEventsToInsert.length === 0) {
      toast.info("All generated events already exist");
      setGenerating(false);
      setShowGenerateModal(false);
      return;
    }

    // Insert in batches to avoid overwhelming the API
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
        `Successfully added ${insertedCount} events for ${format(new Date(year, month - 1), "MMMM yyyy")}`,
      );
    }

    setGenerating(false);
    setShowGenerateModal(false);
    fetchData(); // Refresh the list
  }, [
    generateYear,
    generateMonth,
    midweekDay,
    weekendDay,
    events,
    getEventTypeIdByName,
    fetchData,
  ]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Event Calendar</h1>
            <p className="text-sm text-gray-500 mt-1">
              Manage meeting dates and event types
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowGenerateModal(true)}
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium shadow-sm inline-flex items-center"
            >
              <CalendarPlus className="w-4 h-4 mr-2" />
              Generate Monthly Events
            </button>
            <button
              onClick={() => setShowAddModal(true)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium shadow-sm inline-flex items-center"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Event
            </button>
          </div>
        </div>
      </div>

      {/* Events List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Day
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Event Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Month/Year
                </th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {events.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-8 text-center text-gray-500"
                  >
                    No events scheduled yet
                  </td>
                </tr>
              ) : (
                events.map((event: any) => (
                  <tr key={event.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {format(parseISO(event.event_date), "MMMM d, yyyy")}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {format(parseISO(event.event_date), "EEEE")}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-3 py-1 text-xs font-medium rounded-full border ${
                          event.event_types?.name === "MIDWEEK"
                            ? "bg-yellow-100 text-yellow-700 border-yellow-200"
                            : "bg-green-100 text-green-700 border-green-200"
                        }`}
                      >
                        {event.event_types?.name || "Unknown"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {event.month}/{event.year}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => deleteEvent(event)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Event Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Add Event</h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <span className="text-gray-500 text-xl">×</span>
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Event Date
                </label>
                <input
                  type="date"
                  value={newEventDate}
                  onChange={(e) => setNewEventDate(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Event Type
                </label>
                <select
                  value={newEventTypeId}
                  onChange={(e) => setNewEventTypeId(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  {eventTypes.map((eventType) => (
                    <option key={eventType.id} value={eventType.id}>
                      {eventType.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={addEvent}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Add Event
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Generate Monthly Events Modal */}
      {showGenerateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                Generate Monthly Events
              </h2>
              <button
                onClick={() => setShowGenerateModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <span className="text-gray-500 text-xl">×</span>
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Year
                  </label>
                  <input
                    type="number"
                    min={2000}
                    max={2100}
                    value={generateYear}
                    onChange={(e) =>
                      setGenerateYear(
                        parseInt(e.target.value) || new Date().getFullYear(),
                      )
                    }
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Month
                  </label>
                  <select
                    value={generateMonth}
                    onChange={(e) => setGenerateMonth(parseInt(e.target.value))}
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
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Midweek Day (Monday–Friday)
                </label>
                <select
                  value={midweekDay}
                  onChange={(e) => setMidweekDay(parseInt(e.target.value))}
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
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Weekend Day (Saturday or Sunday)
                </label>
                <select
                  value={weekendDay}
                  onChange={(e) => setWeekendDay(parseInt(e.target.value))}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value={0}>Sunday</option>
                  <option value={6}>Saturday</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200">
              <button
                onClick={() => setShowGenerateModal(false)}
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
      )}
    </div>
  );
}
