import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import {
  EventWithAssignments,
  Task,
  EventType,
  Brother,
} from "../../types/database";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Sparkles,
  Calendar as CalendarIcon,
  Pencil,
} from "lucide-react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  parseISO,
} from "date-fns";
import { toast } from "sonner";
import AssignmentModal from "../components/AssignmentModal";
import { projectId, publicAnonKey } from "../../../utils/supabase/info";

export default function Dashboard() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState<EventWithAssignments[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [eventTypes, setEventTypes] = useState<EventType[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<"calendar" | "table">("table");
  const [selectedEvent, setSelectedEvent] =
    useState<EventWithAssignments | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const calendarDays = eachDayOfInterval({ start: monthStart, end: monthEnd });

  useEffect(() => {
    fetchData();
  }, [currentDate]);

  async function fetchData() {
    try {
      setLoading(true);

      // Fetch tasks
      const { data: tasksData } = await supabase
        .from("tasks")
        .select("*")
        .eq("is_active", true)
        .order("id");

      // Fetch event types
      const { data: eventTypesData } = await supabase
        .from("event_types")
        .select("*");

      // Fetch events for current month
      const { data: eventsData } = await supabase
        .from("events")
        .select(
          `
          *,
          event_types (*)
        `,
        )
        .eq("month", currentDate.getMonth() + 1)
        .eq("year", currentDate.getFullYear())
        .order("event_date");

      // Fetch assignments for these events
      if (eventsData) {
        const eventIds = eventsData.map((e: any) => e.id);
        const { data: assignmentsData } = await supabase
          .from("assignments")
          .select(
            `
            *,
            brothers (*),
            tasks (*)
          `,
          )
          .in("event_id", eventIds);

        const eventsWithAssignments = eventsData.map((event: any) => ({
          ...event,
          event_type: event.event_types,
          assignments:
            assignmentsData?.filter((a: any) => a.event_id === event.id) || [],
        }));

        setEvents(eventsWithAssignments);
      }

      setTasks(tasksData || []);
      setEventTypes(eventTypesData || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to load dashboard data");
    } finally {
      setLoading(false);
    }
  }

  async function generateSchedule() {
    try {
      toast.loading("Generating monthly schedule...", { id: "generate" });

      // Call auto-distribution algorithm
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-cf56d43f/generate-schedule`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({
            month: currentDate.getMonth() + 1,
            year: currentDate.getFullYear(),
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to generate schedule");
      }

      toast.success("Schedule generated successfully!", { id: "generate" });
      fetchData();
    } catch (error) {
      console.error("Error generating schedule:", error);
      toast.error("Failed to generate schedule", { id: "generate" });
    }
  }

  function previousMonth() {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  }

  function nextMonth() {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  }

  function getEventForDay(day: Date) {
    return events.find((event) => isSameDay(parseISO(event.event_date), day));
  }

  function getTaskColor(taskName: string) {
    const colors: Record<string, string> = {
      "AV-1": "bg-blue-100 text-blue-700 border-blue-200",
      "AV-2": "bg-purple-100 text-purple-700 border-purple-200",
      CAMERA: "bg-pink-100 text-pink-700 border-pink-200",
      "ATTENDANCE/AUDITORIUM":
        "bg-indigo-100 text-indigo-700 border-indigo-200",
      "ENTRANCE-1": "bg-emerald-100 text-emerald-700 border-emerald-200",
      "ENTRANCE-2": "bg-teal-100 text-teal-700 border-teal-200",
      "ENTRANCE-3": "bg-cyan-100 text-cyan-700 border-cyan-200",
    };
    return colors[taskName] || "bg-gray-100 text-gray-700 border-gray-200";
  }

  function getEventTypeColor(eventTypeName: string) {
    return eventTypeName === "MIDWEEK"
      ? "bg-yellow-100 text-yellow-700 border-yellow-200"
      : "bg-green-100 text-green-700 border-green-200";
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-8xl mx-auto space-y-4">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Monthly Task Assignment
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Manage and assign tasks for meetings
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() =>
                setViewMode(viewMode === "calendar" ? "table" : "calendar")
              }
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
            >
              <CalendarIcon className="w-4 h-4 inline-block mr-2" />
              {viewMode === "calendar" ? "Table View" : "Calendar View"}
            </button>
            <button
              onClick={generateSchedule}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium shadow-sm"
            >
              <Sparkles className="w-4 h-4 inline-block mr-2" />
              Generate Schedule
            </button>
            <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium shadow-sm">
              <Download className="w-4 h-4 inline-block mr-2" />
              Export
            </button>
          </div>
        </div>

        {/* Month Navigation */}
        <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
          <button
            onClick={previousMonth}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h2 className="text-xl font-semibold text-gray-900">
            {format(currentDate, "MMMM yyyy")}
          </h2>
          <button
            onClick={nextMonth}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Calendar View */}
      {viewMode === "calendar" && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="grid grid-cols-7 gap-2">
            {/* Day headers */}
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                className="text-center text-xs font-semibold text-gray-500 py-2"
              >
                {day}
              </div>
            ))}

            {/* Calendar days */}
            {calendarDays.map((day) => {
              const event = getEventForDay(day);
              const isToday = isSameDay(day, new Date());

              return (
                <div
                  key={day.toString()}
                  className={`min-h-32 border border-gray-200 rounded-lg p-2 ${
                    !isSameMonth(day, currentDate)
                      ? "bg-gray-50"
                      : event
                        ? "bg-white cursor-pointer hover:shadow-md transition-shadow"
                        : "bg-gray-50/50"
                  } ${isToday ? "ring-2 ring-indigo-600" : ""}`}
                  onClick={() => {
                    if (event) {
                      setSelectedEvent(event);
                      setModalOpen(true);
                    }
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-sm font-medium ${
                        isToday
                          ? "text-indigo-600"
                          : isSameMonth(day, currentDate)
                            ? "text-gray-900"
                            : "text-gray-400"
                      }`}
                    >
                      {format(day, "d")}
                    </span>
                    {event && (
                      <span
                        className={`text-xs px-2 py-0.5 rounded border ${getEventTypeColor(
                          event.event_type?.name || "",
                        )}`}
                      >
                        {event.event_type?.name}
                      </span>
                    )}
                  </div>

                  {event && (
                    <div className="space-y-1">
                      {event.assignments.slice(0, 3).map((assignment: any) => (
                        <div
                          key={assignment.id}
                          className={`text-xs px-2 py-1 rounded border ${getTaskColor(
                            assignment.tasks?.name || "",
                          )}`}
                        >
                          <div className="font-medium truncate">
                            {assignment.tasks?.name}
                          </div>
                          <div className="truncate opacity-75">
                            {assignment.brothers?.full_name}
                          </div>
                        </div>
                      ))}
                      {event.assignments.length > 3 && (
                        <div className="text-xs text-gray-500 px-2">
                          +{event.assignments.length - 3} more
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Table View */}
      {viewMode === "table" && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-24">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-32">
                    Meeting
                  </th>
                  {tasks.map((task) => (
                    <th
                      key={task.id}
                      className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      {task.name}
                    </th>
                  ))}
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-10"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {events.length === 0 ? (
                  <tr>
                    <td
                      colSpan={tasks.length + 3}
                      className="px-4 py-8 text-center text-gray-500"
                    >
                      No events scheduled for this month
                    </td>
                  </tr>
                ) : (
                  events.map((event) => (
                    <tr key={event.id} className="hover:bg-gray-50">
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {format(parseISO(event.event_date), "MMM d")}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-3 py-1 text-xs font-medium rounded-full border ${getEventTypeColor(
                            event.event_type?.name || "",
                          )}`}
                        >
                          {event.event_type?.name}
                        </span>
                      </td>
                      {tasks.map((task) => {
                        const assignment = event.assignments.find(
                          (a: any) => a.tasks?.id === task.id,
                        );
                        return (
                          <td
                            key={task.id}
                            className="px-4 py-4 text-sm text-gray-600"
                          >
                            {assignment ? (
                              <span className="font-medium">
                                {(assignment as any).brothers?.full_name || "-"}
                              </span>
                            ) : (
                              <span className="text-gray-400">Unassigned</span>
                            )}
                          </td>
                        );
                      })}
                      <td className=" whitespace-nowrap text-sm">
                        <button
                          onClick={() => {
                            setSelectedEvent(event);
                            setModalOpen(true);
                          }}
                          className="text-indigo-600 hover:text-indigo-900 transition-colors"
                          title="Edit assignments"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Assignment Modal */}
      {modalOpen && selectedEvent && (
        <AssignmentModal
          event={selectedEvent}
          tasks={tasks}
          onClose={() => {
            setModalOpen(false);
            setSelectedEvent(null);
          }}
          onSave={() => {
            fetchData();
            setModalOpen(false);
            setSelectedEvent(null);
          }}
        />
      )}
    </div>
  );
}
