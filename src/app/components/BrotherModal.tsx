import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Brother, Task, EventType, BrotherTaskEligibility } from '../../types/database';
import { X } from 'lucide-react';
import { toast } from 'sonner';

interface BrotherModalProps {
  brother: Brother | null;
  tasks: Task[];
  eventTypes: EventType[];
  onClose: () => void;
  onSave: () => void;
}

export default function BrotherModal({
  brother,
  tasks,
  eventTypes,
  onClose,
  onSave,
}: BrotherModalProps) {
  const [brotherId, setBrotherId] = useState(brother?.id || 0);
  const [fullName, setFullName] = useState(brother?.full_name || '');
  const [isActive, setIsActive] = useState(brother?.is_active ?? true);
  const [eligibility, setEligibility] = useState<Record<string, string[]>>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (brother) {
      fetchEligibility();
    } else {
      // Initialize with all tasks eligible for both event types
      const initialEligibility: Record<string, string[]> = {};
      tasks.forEach((task) => {
        initialEligibility[task.id] = eventTypes.map((et) => et.id);
      });
      setEligibility(initialEligibility);
    }
  }, [brother]);

  async function fetchEligibility() {
    if (!brother) return;

    const { data } = await supabase
      .from('brother_task_eligibility')
      .select('*')
      .eq('brother_id', brother.id);

    const eligibilityMap: Record<string, string[]> = {};
    tasks.forEach((task) => {
      eligibilityMap[task.id] = [];
    });

    data?.forEach((item: BrotherTaskEligibility) => {
      if (!eligibilityMap[item.task_id]) {
        eligibilityMap[item.task_id] = [];
      }
      eligibilityMap[item.task_id].push(item.event_type_id);
    });

    setEligibility(eligibilityMap);
  }

  function toggleEligibility(taskId: string, eventTypeId: string) {
    setEligibility((prev) => {
      const current = prev[taskId] || [];
      const updated = current.includes(eventTypeId)
        ? current.filter((id) => id !== eventTypeId)
        : [...current, eventTypeId];
      return { ...prev, [taskId]: updated };
    });
  }

  async function handleSave() {
    if (!fullName.trim()) {
      toast.error('Please enter a name');
      return;
    }

    if (!brotherId || brotherId <= 0) {
      toast.error('Please enter a valid brother ID');
      return;
    }

    try {
      setLoading(true);

      if (brother) {
        // Update existing brother
        const { error: updateError } = await supabase
          .from('brothers')
          .update({ full_name: fullName, is_active: isActive })
          .eq('id', brother.id);

        if (updateError) throw updateError;

        // Delete existing eligibility
        await supabase
          .from('brother_task_eligibility')
          .delete()
          .eq('brother_id', brother.id);
      } else {
        // Create new brother
        const { error: insertError } = await supabase
          .from('brothers')
          .insert({ id: brotherId, full_name: fullName, is_active: isActive });

        if (insertError) throw insertError;
      }

      // Insert eligibility records
      const eligibilityRecords = Object.entries(eligibility).flatMap(
        ([taskId, eventTypeIds]) =>
          eventTypeIds.map((eventTypeId) => ({
            brother_id: brother?.id || brotherId,
            task_id: taskId,
            event_type_id: eventTypeId,
          }))
      );

      if (eligibilityRecords.length > 0) {
        const { error: eligibilityError } = await supabase
          .from('brother_task_eligibility')
          .insert(eligibilityRecords);

        if (eligibilityError) throw eligibilityError;
      }

      toast.success(
        brother ? 'Brother updated successfully!' : 'Brother added successfully!'
      );
      onSave();
    } catch (error: any) {
      console.error('Error saving brother:', error);
      if (error.code === '23505') {
        toast.error('A brother with this ID already exists');
      } else {
        toast.error('Failed to save brother');
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50">
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            {brother ? 'Edit Brother' : 'Add New Brother'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {/* Basic Info */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Basic Information
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Brother ID
                  </label>
                  <input
                    type="number"
                    value={brotherId}
                    onChange={(e) => setBrotherId(parseInt(e.target.value))}
                    disabled={!!brother}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-100"
                    placeholder="Enter brother ID"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter full name"
                  />
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="is-active"
                    checked={isActive}
                    onChange={(e) => setIsActive(e.target.checked)}
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="is-active"
                    className="text-sm font-medium text-gray-700"
                  >
                    Active
                  </label>
                </div>
              </div>
            </div>

            {/* Task Eligibility */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Task Eligibility
              </h3>
              <div className="space-y-4">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className="p-4 border border-gray-200 rounded-lg"
                  >
                    <h4 className="text-sm font-medium text-gray-900 mb-3">
                      {task.name}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {eventTypes.map((eventType) => {
                        const isEligible = (eligibility[task.id] || []).includes(
                          eventType.id
                        );
                        return (
                          <label
                            key={eventType.id}
                            className="flex items-center space-x-2 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              checked={isEligible}
                              onChange={() =>
                                toggleEligibility(task.id, eventType.id)
                              }
                              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                            />
                            <span className="text-sm text-gray-700">
                              {eventType.name}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
            disabled={loading}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Saving...' : brother ? 'Update Brother' : 'Add Brother'}
          </button>
        </div>
      </div>
    </div>
  );
}
