import { useState, useEffect, useCallback } from "react";
import { supabase } from "../../lib/supabase";
import { Event, EventType } from "../../types/database";
import { Plus, Trash2, CalendarPlus } from "lucide-react";
import { format, parseISO } from "date-fns";
import { toast } from "sonner";
import { GenerateEventsModal } from "../components/modals/GenerateEventsModal";

export default function CalendarPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [eventTypes, setEventTypes] = useState<EventType[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newEventDate, setNewEventDate] = useState("");
  const [newEventTypeId, setNewEventTypeId] = useState("");
  const [showGenerateModal, setShowGenerateModal] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const [eventsRes, eventTypesRes] = await Promise.all([
        supabase
          .from("events")
          .select("*, event_types(*)")
          .order("event_date", { ascending: false })
          .limit(100),
        supabase.from("event_types").select("*"),
      ]);

      setEvents(eventsRes.data || []);
      setEventTypes(eventTypesRes.data || []);

      if (eventTypesRes.data?.length) {
        setNewEventTypeId(eventTypesRes.data[0].id);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to load calendar data");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const addEvent = useCallback(async () => {
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

      toast.success("Meeting added successfully!");
      setShowAddModal(false);
      setNewEventDate("");
      fetchData();
    } catch (error) {
      console.error("Error adding event:", error);
      toast.error("Failed to add event");
    }
  }, [newEventDate, newEventTypeId, fetchData]);

  const deleteEvent = useCallback(
    async (event: Event) => {
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
        toast.success("Meeting deleted successfully!");
        fetchData();
      } catch (error) {
        console.error("Error deleting event:", error);
        toast.error("Failed to delete event");
      }
    },
    [fetchData],
  );

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
            <h1 className="text-2xl font-bold text-gray-900">
              Meeting Calendar
            </h1>
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
              Add Meeting
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
                  Meeting Type
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
                        aria-label="Delete event"
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
              <h2 className="text-xl font-semibold text-gray-900">
                Add Meeting
              </h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Close"
              >
                <span className="text-gray-500 text-xl">×</span>
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label
                  htmlFor="eventDate"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Meeting Date
                </label>
                <input
                  id="eventDate"
                  type="date"
                  value={newEventDate}
                  onChange={(e) => setNewEventDate(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="eventType"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Meeting Type
                </label>
                <select
                  id="eventType"
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
                Add Meeting
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Generate Events Modal (extracted) */}
      <GenerateEventsModal
        isOpen={showGenerateModal}
        onClose={() => setShowGenerateModal(false)}
        onSuccess={fetchData}
        eventTypes={eventTypes}
      />
    </div>
  );
}
