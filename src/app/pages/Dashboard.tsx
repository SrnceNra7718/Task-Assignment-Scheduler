import { useEffect, useState, useMemo, useCallback } from "react";
import { supabase } from "../../lib/supabase";
import { EventWithAssignments, Task } from "../../types/database";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Sparkles,
  Calendar as CalendarIcon,
  Maximize2,
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
import AssignmentModal from "../components/modals/AssignmentModal";

import { projectId, publicAnonKey } from "../../../utils/supabase/info";
import { AssignmentsTable } from "../components/AssignmentsTable";
import { FullScreenTableModal } from "../components/modals/FullScreenTableModal";
import { getEventTypeColor, getTaskColor } from "../components/styleHelpers";

export default function Dashboard() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState<EventWithAssignments[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<"calendar" | "table">("table");
  const [selectedEvent, setSelectedEvent] =
    useState<EventWithAssignments | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [fullscreenModalOpen, setFullscreenModalOpen] = useState(false);

  // Derived values
  const monthStart = useMemo(() => startOfMonth(currentDate), [currentDate]);
  const monthEnd = useMemo(() => endOfMonth(currentDate), [currentDate]);
  const calendarDays = useMemo(
    () => eachDayOfInterval({ start: monthStart, end: monthEnd }),
    [monthStart, monthEnd],
  );

  const eventByDateMap = useMemo(() => {
    const map = new Map<string, EventWithAssignments>();
    events.forEach((event) => {
      const dateKey = format(parseISO(event.event_date), "yyyy-MM-dd");
      map.set(dateKey, event);
    });
    return map;
  }, [events]);

  const getEventForDay = useCallback(
    (day: Date) => {
      const dateKey = format(day, "yyyy-MM-dd");
      return eventByDateMap.get(dateKey);
    },
    [eventByDateMap],
  );

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const { data: tasksData } = await supabase
        .from("tasks")
        .select("*")
        .eq("is_active", true)
        .order("id");

      const { data: eventsData } = await supabase
        .from("events")
        .select(`*, event_types(*)`)
        .eq("month", currentDate.getMonth() + 1)
        .eq("year", currentDate.getFullYear())
        .order("event_date");

      if (eventsData?.length) {
        const eventIds = eventsData.map((e) => e.id);
        const { data: assignmentsData } = await supabase
          .from("assignments")
          .select(`*, brothers(*), tasks(*)`)
          .in("event_id", eventIds);

        const eventsWithAssignments = eventsData.map((event) => ({
          ...event,
          event_type: event.event_types,
          assignments:
            assignmentsData?.filter((a) => a.event_id === event.id) || [],
        }));
        setEvents(eventsWithAssignments);
      } else {
        setEvents([]);
      }
      setTasks(tasksData || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to load dashboard data");
    } finally {
      setLoading(false);
    }
  }, [currentDate]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const generateSchedule = useCallback(async () => {
    try {
      toast.loading("Generating monthly schedule...", { id: "generate" });
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
      if (!response.ok) throw new Error("Failed to generate schedule");
      toast.success("Schedule generated successfully!", { id: "generate" });
      fetchData();
    } catch (error) {
      console.error("Error generating schedule:", error);
      toast.error("Failed to generate schedule", { id: "generate" });
    }
  }, [currentDate, fetchData]);

  const previousMonth = useCallback(() => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  }, [currentDate]);

  const nextMonth = useCallback(() => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  }, [currentDate]);

  const handleEditEvent = useCallback((event: EventWithAssignments) => {
    setSelectedEvent(event);
    setModalOpen(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setModalOpen(false);
    setSelectedEvent(null);
  }, []);

  const handleModalSave = useCallback(() => {
    fetchData();
    setModalOpen(false);
    setSelectedEvent(null);
  }, [fetchData]);

  const handleFullScreenClose = useCallback(() => {
    setFullscreenModalOpen(false);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-8xl mx-auto space-y-4">
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
            {viewMode === "table" && (
              <button
                onClick={() => setFullscreenModalOpen(true)}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium shadow-sm"
              >
                <Maximize2 className="w-4 h-4 inline-block mr-2" />
                Full Screen
              </button>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
          <button
            onClick={previousMonth}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Previous month"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h2 className="text-xl font-semibold text-gray-900">
            {format(currentDate, "MMMM yyyy")}
          </h2>
          <button
            onClick={nextMonth}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Next month"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {viewMode === "calendar" && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="grid grid-cols-7 gap-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                className="text-center text-xs font-semibold text-gray-500 py-2"
              >
                {day}
              </div>
            ))}
            {calendarDays.map((day) => {
              const event = getEventForDay(day);
              const isToday = isSameDay(day, new Date());
              const isCurrentMonth = isSameMonth(day, currentDate);
              const dayClasses = `min-h-32 border border-gray-200 rounded-lg p-2 ${
                isCurrentMonth
                  ? event
                    ? "bg-white cursor-pointer hover:shadow-md transition-shadow"
                    : "bg-gray-50/50"
                  : "bg-gray-50"
              } ${isToday ? "ring-2 ring-indigo-600" : ""}`;

              const dayContent = (
                <>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-sm font-medium ${
                        isToday
                          ? "text-indigo-600"
                          : isCurrentMonth
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
                </>
              );

              return event ? (
                <button
                  key={day.toString()}
                  type="button"
                  onClick={() => handleEditEvent(event)}
                  className={dayClasses}
                >
                  {dayContent}
                </button>
              ) : (
                <div key={day.toString()} className={dayClasses}>
                  {dayContent}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {viewMode === "table" && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <AssignmentsTable
            events={events}
            tasks={tasks}
            showEditColumn
            onEditEvent={handleEditEvent}
          />
        </div>
      )}

      {modalOpen && selectedEvent && (
        <AssignmentModal
          event={selectedEvent}
          tasks={tasks}
          onClose={handleModalClose}
          onSave={handleModalSave}
        />
      )}

      <FullScreenTableModal
        isOpen={fullscreenModalOpen}
        onClose={handleFullScreenClose}
        events={events}
        tasks={tasks}
        currentDate={currentDate}
      />
    </div>
  );
}
