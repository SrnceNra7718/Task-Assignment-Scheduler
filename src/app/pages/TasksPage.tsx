import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import { Task } from "../../types/database";
import { Pencil, Trash2, ToggleLeft, ToggleRight } from "lucide-react";
import { toast } from "sonner";

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [newTaskName, setNewTaskName] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  async function fetchTasks() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("tasks")
        .select("*")
        .order("id");

      if (error) throw error;
      setTasks(data || []);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      toast.error("Failed to load tasks");
    } finally {
      setLoading(false);
    }
  }

  async function toggleTaskStatus(task: Task) {
    try {
      const { error } = await supabase
        .from("tasks")
        .update({ is_active: !task.is_active })
        .eq("id", task.id);

      if (error) throw error;

      toast.success(
        `${task.name} is now ${!task.is_active ? "active" : "inactive"}`,
      );
      fetchTasks();
    } catch (error) {
      console.error("Error toggling task status:", error);
      toast.error("Failed to update status");
    }
  }

  async function deleteTask(task: Task) {
    if (
      !confirm(
        `Are you sure you want to delete ${task.name}? This will remove all related assignments and eligibility records.`,
      )
    ) {
      return;
    }

    try {
      const { error } = await supabase.from("tasks").delete().eq("id", task.id);

      if (error) throw error;

      toast.success(`${task.name} has been deleted`);
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
      toast.error("Failed to delete task");
    }
  }

  async function updateTask(task: Task) {
    if (!newTaskName.trim()) {
      toast.error("Please enter a task name");
      return;
    }

    try {
      const { error } = await supabase
        .from("tasks")
        .update({ name: newTaskName })
        .eq("id", task.id);

      if (error) throw error;

      toast.success("Task updated successfully!");
      setEditingTask(null);
      setNewTaskName("");
      fetchTasks();
    } catch (error) {
      console.error("Error updating task:", error);
      toast.error("Failed to update task");
    }
  }

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
              Tasks Management
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Configure available tasks for assignment
            </p>
          </div>
        </div>
      </div>

      {/* Tasks List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Task Name
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
              {tasks.length === 0 ? (
                <tr>
                  <td
                    colSpan={3}
                    className="px-6 py-8 text-center text-gray-500"
                  >
                    No tasks configured yet
                  </td>
                </tr>
              ) : (
                tasks.map((task) => (
                  <tr key={task.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      {editingTask?.id === task.id ? (
                        <input
                          type="text"
                          value={newTaskName}
                          onChange={(e) => setNewTaskName(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") updateTask(task);
                            if (e.key === "Escape") {
                              setEditingTask(null);
                              setNewTaskName("");
                            }
                          }}
                          className="px-3 py-1.5 border border-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                          autoFocus
                        />
                      ) : (
                        <div className="text-sm font-medium text-gray-900">
                          {task.name}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => toggleTaskStatus(task)}
                        className="inline-flex items-center space-x-2"
                      >
                        {task.is_active ? (
                          <ToggleRight className="w-8 h-8 text-emerald-600" />
                        ) : (
                          <ToggleLeft className="w-8 h-8 text-gray-400" />
                        )}
                        <span
                          className={`text-sm font-medium ${
                            task.is_active
                              ? "text-emerald-600"
                              : "text-gray-500"
                          }`}
                        >
                          {task.is_active ? "Active" : "Inactive"}
                        </span>
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end space-x-2">
                        {editingTask?.id === task.id ? (
                          <>
                            <button
                              onClick={() => updateTask(task)}
                              className="px-3 py-1.5 bg-indigo-600 text-white text-xs rounded-lg hover:bg-indigo-700 transition-colors"
                            >
                              Save
                            </button>
                            <button
                              onClick={() => {
                                setEditingTask(null);
                                setNewTaskName("");
                              }}
                              className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs rounded-lg hover:bg-gray-200 transition-colors"
                            >
                              Cancel
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              onClick={() => {
                                setEditingTask(task);
                                setNewTaskName(task.name);
                              }}
                              className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                              title="Edit"
                            >
                              <Pencil className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => deleteTask(task)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Info Card */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="text-sm font-semibold text-blue-900 mb-2">
          About Task Management
        </h3>
        <p className="text-sm text-blue-700">
          Tasks represent the different roles that brothers can be assigned to
          during meetings. You can activate/deactivate tasks as needed. Inactive
          tasks won't appear in the assignment system but their historical data
          is preserved.
        </p>
      </div>
    </div>
  );
}
