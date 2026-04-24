import { useEffect, useState } from "react";
import { Link } from "react-router";
import { supabase } from "../../lib/supabase";
import { EventWithAssignments, Task } from "../../types/database";
import { format } from "date-fns";
import { toast } from "sonner";
import { X } from "lucide-react";
import { AssignmentsTable } from "../components/AssignmentsTable";

interface HomePageProps {}

export default function HomePage({}: Readonly<HomePageProps>) {
  const [currentDate] = useState(new Date());
  const [events, setEvents] = useState<EventWithAssignments[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
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
      toast.error("Failed to load schedule data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // Lock body scroll on root page (like modal)
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex flex-col bg-white">
      {/* Header */}
      <div className="flex-shrink-0 border-b border-gray-200 px-6 py-4 flex items-center justify-center bg-white">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-semibold text-gray-900">
            {format(currentDate, "MMMM yyyy")}
          </h1>
          <p className="text-sm text-gray-500 mt-1 text-center">
            Task assignments for the month
          </p>
        </div>
        <Link
          to="/dashboard"
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors absolute right-4 top-4"
          aria-label="Back to dashboard"
        >
          <X className="w-5 h-5 text-gray-600" />
        </Link>
      </div>

      {/* Scrollable table area */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="max-w-full">
          <AssignmentsTable
            events={events}
            tasks={tasks}
            showEditColumn={false}
          />
        </div>
      </div>
    </div>
  );
}
