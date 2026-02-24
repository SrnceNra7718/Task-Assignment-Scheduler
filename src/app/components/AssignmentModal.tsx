import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { EventWithAssignments, Task, Brother } from '../../types/database';
import { X, AlertTriangle } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { toast } from 'sonner';

interface AssignmentModalProps {
  event: EventWithAssignments;
  tasks: Task[];
  onClose: () => void;
  onSave: () => void;
}

export default function AssignmentModal({
  event,
  tasks,
  onClose,
  onSave,
}: AssignmentModalProps) {
  const [assignments, setAssignments] = useState<Record<string, number | null>>({});
  const [eligibleBrothers, setEligibleBrothers] = useState<Record<string, Brother[]>>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Initialize assignments from event
    const initialAssignments: Record<string, number | null> = {};
    event.assignments.forEach((assignment: any) => {
      initialAssignments[assignment.tasks?.id] = assignment.brother_id;
    });
    setAssignments(initialAssignments);

    // Fetch eligible brothers for each task
    fetchEligibleBrothers();
  }, [event]);

  async function fetchEligibleBrothers() {
    const eligible: Record<string, Brother[]> = {};

    for (const task of tasks) {
      const { data } = await supabase
        .from('brother_task_eligibility')
        .select(`
          brother_id,
          brothers (*)
        `)
        .eq('task_id', task.id)
        .eq('event_type_id', event.event_type_id);

      if (data) {
        eligible[task.id] = data
          .map((item: any) => item.brothers)
          .filter((brother: any) => brother?.is_active);
      }
    }

    setEligibleBrothers(eligible);
  }

  function handleAssignmentChange(taskId: string, brotherId: string) {
    setAssignments({
      ...assignments,
      [taskId]: brotherId ? parseInt(brotherId) : null,
    });
  }

  function getConflicts() {
    const brotherIds = Object.values(assignments).filter((id) => id !== null);
    const duplicates = brotherIds.filter(
      (id, index) => brotherIds.indexOf(id) !== index
    );
    return [...new Set(duplicates)];
  }

  async function handleSave() {
    const conflicts = getConflicts();
    if (conflicts.length > 0) {
      toast.error('Cannot assign the same brother to multiple tasks on the same day');
      return;
    }

    try {
      setLoading(true);

      // Delete existing assignments
      await supabase
        .from('assignments')
        .delete()
        .eq('event_id', event.id);

      // Insert new assignments
      const newAssignments = Object.entries(assignments)
        .filter(([_, brotherId]) => brotherId !== null)
        .map(([taskId, brotherId]) => ({
          event_id: event.id,
          task_id: taskId,
          brother_id: brotherId,
        }));

      if (newAssignments.length > 0) {
        const { error } = await supabase
          .from('assignments')
          .insert(newAssignments);

        if (error) throw error;
      }

      toast.success('Assignments saved successfully!');
      onSave();
    } catch (error) {
      console.error('Error saving assignments:', error);
      toast.error('Failed to save assignments');
    } finally {
      setLoading(false);
    }
  }

  const conflicts = getConflicts();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Edit Assignments
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              {format(parseISO(event.event_date), 'MMMM d, yyyy')} -{' '}
              {event.event_type?.name}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {conflicts.length > 0 && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
              <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-red-800">
                  Conflict Detected
                </p>
                <p className="text-sm text-red-700 mt-1">
                  The same brother is assigned to multiple tasks. Please review
                  your selections.
                </p>
              </div>
            </div>
          )}

          <div className="space-y-4">
            {tasks.map((task) => {
              const brothers = eligibleBrothers[task.id] || [];
              const selectedBrotherId = assignments[task.id];
              const hasConflict =
                selectedBrotherId && conflicts.includes(selectedBrotherId);

              return (
                <div key={task.id}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {task.name}
                  </label>
                  <select
                    value={selectedBrotherId || ''}
                    onChange={(e) =>
                      handleAssignmentChange(task.id, e.target.value)
                    }
                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                      hasConflict
                        ? 'border-red-300 bg-red-50'
                        : 'border-gray-300'
                    }`}
                  >
                    <option value="">-- Select Brother --</option>
                    {brothers.map((brother) => (
                      <option key={brother.id} value={brother.id}>
                        {brother.full_name}
                      </option>
                    ))}
                  </select>
                  {brothers.length === 0 && (
                    <p className="text-xs text-gray-500 mt-1">
                      No eligible brothers for this task
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={loading || conflicts.length > 0}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Saving...' : 'Save Assignments'}
          </button>
        </div>
      </div>
    </div>
  );
}
