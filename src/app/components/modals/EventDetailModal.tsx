import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { EventWithAssignments, Task } from "../../../types/database";
import { format, parseISO } from "date-fns";

interface EventDetailModalProps {
  event: EventWithAssignments;
  tasks: Task[];
  onClose: () => void;
}

export default function EventDetailModal({
  event,
  tasks,
  onClose,
}: EventDetailModalProps) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const MAX_VISIBLE = 8;
  // Build ordered list of assignments matching the task order
  const visibleTasks = tasks.slice(0, MAX_VISIBLE).map((task) => {
    const assignment = event.assignments.find(
      (a: any) => a.tasks?.id === task.id
    );
    return { task, assignment };
  });
  const remaining =
    event.assignments.length - MAX_VISIBLE > 0
      ? Math.max(0, event.assignments.length - MAX_VISIBLE)
      : 0;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header – centered */}
        <div className="flex items-center justify-between p-3 border-b border-gray-200 flex-shrink-0">
          <div className="flex-1 text-center">
            <h2 className="text-2xl font-semibold text-gray-900">
              {format(parseISO(event.event_date), "MMMM d, yyyy")}
            </h2>
            <p className="text-base text-gray-500 mt-0.5">
              <span className="font-bold">
                {event.event_type?.name || "No Type"}
              </span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Body – non-scrollable, compact */}
        <div className="flex-1 overflow-hidden p-3">
          {event.assignments.length === 0 ? (
            <p className="text-center text-gray-500 italic py-2 text-base">
              No brothers assigned
            </p>
          ) : (
            <div className="space-y-2">
              {visibleTasks.map(({ task, assignment }) => {
                const a = assignment as any;
                return (
                  <div
                    key={task.id}
                    className="flex flex-col items-center py-2 px-4  "
                  >
                    <p
                      className="text-base text-gray-700 text-center truncate w-full"
                      title={task.name}
                    >
                      {task.name}
                    </p>
                    <p
                      className="font-bold text-lg text-gray-900 text-center truncate w-full mt-0.5"
                      title={a?.brothers?.full_name || ""}
                    >
                      {a?.brothers?.full_name || "Unassigned"}
                    </p>
                  </div>
                );
              })}
              {remaining > 0 && (
                <p className="text-sm text-gray-500 italic text-center py-1">
                  + {remaining} more
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
