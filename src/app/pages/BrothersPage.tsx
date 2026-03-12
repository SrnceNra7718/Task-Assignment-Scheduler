import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import { Brother, Task, EventType } from "../../types/database";
import { Plus, Pencil, Trash2, Search, Toggle } from "lucide-react";
import { toast } from "sonner";
import BrotherModal from "../components/BrotherModal";

export default function BrothersPage() {
  const [brothers, setBrothers] = useState<Brother[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [eventTypes, setEventTypes] = useState<EventType[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBrother, setSelectedBrother] = useState<Brother | null>(null);
  const [brotherStats, setBrotherStats] = useState<Record<number, number>>({});

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setLoading(true);

      const [brothersRes, tasksRes, eventTypesRes] = await Promise.all([
        supabase.from("brothers").select("*").order("id"),
        supabase.from("tasks").select("*").eq("is_active", true).order("id"),
        supabase.from("event_types").select("*"),
      ]);

      setBrothers(brothersRes.data || []);
      setTasks(tasksRes.data || []);
      setEventTypes(eventTypesRes.data || []);

      // Fetch current month stats
      const currentDate = new Date();
      const { data: statsData } = await supabase
        .from("monthly_assignment_count")
        .select("*")
        .eq("month", currentDate.getMonth() + 1)
        .eq("year", currentDate.getFullYear());

      const stats: Record<number, number> = {};
      statsData?.forEach((stat: any) => {
        stats[stat.brother_id] = stat.total_assignments;
      });
      setBrotherStats(stats);
    } catch (error) {
      console.error("Error fetching brothers:", error);
      toast.error("Failed to load brothers");
    } finally {
      setLoading(false);
    }
  }

  async function toggleBrotherStatus(brother: Brother) {
    try {
      const { error } = await supabase
        .from("brothers")
        .update({ is_active: !brother.is_active })
        .eq("id", brother.id);

      if (error) throw error;

      toast.success(
        `${brother.full_name} is now ${!brother.is_active ? "active" : "inactive"}`,
      );
      fetchData();
    } catch (error) {
      console.error("Error toggling brother status:", error);
      toast.error("Failed to update status");
    }
  }

  async function deleteBrother(brother: Brother) {
    if (
      !confirm(
        `Are you sure you want to delete ${brother.full_name}? This will remove all their assignments and eligibility records.`,
      )
    ) {
      return;
    }

    try {
      const { error } = await supabase
        .from("brothers")
        .delete()
        .eq("id", brother.id);

      if (error) throw error;

      toast.success(`${brother.full_name} has been deleted`);
      fetchData();
    } catch (error) {
      console.error("Error deleting brother:", error);
      toast.error("Failed to delete brother");
    }
  }

  const filteredBrothers = brothers.filter((brother) =>
    brother.full_name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Brothers Management
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Manage brother profiles and task eligibility
            </p>
          </div>
          <button
            onClick={() => {
              setSelectedBrother(null);
              setModalOpen(true);
            }}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium shadow-sm inline-flex items-center"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Brother
          </button>
        </div>

        {/* Search */}
        <div className="mt-6 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search brothers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>

      {/* Brothers Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Full Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Assignments This Month
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredBrothers.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-8 text-center text-gray-500"
                  >
                    {searchTerm
                      ? "No brothers found matching your search"
                      : "No brothers added yet"}
                  </td>
                </tr>
              ) : (
                filteredBrothers.map((brother) => (
                  <tr key={brother.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {brother.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {brother.full_name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-700">
                        {brotherStats[brother.id] || 0}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => toggleBrotherStatus(brother)}
                        className="inline-flex items-center"
                      >
                        <span
                          className={`inline-flex px-3 py-1 text-xs font-medium rounded-full border ${
                            brother.is_active
                              ? "bg-emerald-100 text-emerald-700 border-emerald-200"
                              : "bg-gray-100 text-gray-700 border-gray-200"
                          }`}
                        >
                          {brother.is_active ? "Active" : "Inactive"}
                        </span>
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end space-x-2">
                        <button
                          onClick={() => {
                            setSelectedBrother(brother);
                            setModalOpen(true);
                          }}
                          className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => deleteBrother(brother)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Brother Modal */}
      {modalOpen && (
        <BrotherModal
          brother={selectedBrother}
          tasks={tasks}
          eventTypes={eventTypes}
          onClose={() => {
            setModalOpen(false);
            setSelectedBrother(null);
          }}
          onSave={() => {
            fetchData();
            setModalOpen(false);
            setSelectedBrother(null);
          }}
        />
      )}
    </div>
  );
}
