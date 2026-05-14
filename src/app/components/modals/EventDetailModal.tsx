import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X, FileImage } from "lucide-react";
import { EventWithAssignments, Task } from "../../../types/database";
import { format, parseISO } from "date-fns";
import { toPng } from "html-to-image";

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

  const captureAsImage = async () => {
    const modalElement = document.getElementById("event-detail-modal-content");
    if (!modalElement) return;

    try {
      const dataUrl = await toPng(modalElement, {
        quality: 0.95,
        pixelRatio: 2,
        style: { transform: "scale(1)", transformOrigin: "top left" },
        cacheBust: true,
      });

      const response = await fetch(dataUrl);
      const blob = await response.blob();

      if (blob) {
        await navigator.clipboard.write([
          new ClipboardItem({
            "image/png": blob,
          }),
        ]);
        alert("Task image copied to clipboard!");
      }
    } catch (err) {
      console.error("Failed to capture modal:", err);
      alert("Failed to copy image to clipboard");
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 bg-gray-900/50">
      {/* Screenshot buttons - positioned outside modal content */}
      <div className="absolute top-4 right-4 flex gap-2 z-10">
        <button
          onClick={captureAsImage}
          className="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors"
          aria-label="Copy as image"
          title="Copy tasks as image"
        >
          <FileImage className="w-5 h-5 text-gray-600" />
        </button>
        <button
          onClick={onClose}
          className="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div
        id="event-detail-modal-content"
        className="bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-hidden flex flex-col"
      >
        {/* Header – centered */}
        <div className="flex items-center justify-center p-2 border-b border-gray-200 flex-shrink-0">
          <div className="flex-1 text-center">
            <h2 className="text-xl font-semibold text-gray-900">
              {format(parseISO(event.event_date), "MMMM d, yyyy")}
            </h2>
            <p className="text-sm text-gray-500 mt-0.5">
              <span className="font-bold">
                {event.event_type?.name || "No Type"}
              </span>
            </p>
          </div>
        </div>

        {/* Body – non-scrollable, compact */}
        <div className="flex-1 overflow-hidden p-2">
          {event.assignments.length === 0 ? (
            <p className="text-center text-gray-500 italic py-1.5 text-sm">
              No brothers assigned
            </p>
          ) : (
            <div className="space-y-1">
              {visibleTasks.map(({ task, assignment }) => {
                const a = assignment as any;
                return (
                  <div
                    key={task.id}
                    className="flex flex-col items-center py-1.5 px-2"
                  >
                    <p
                      className="text-sm text-gray-700 text-center truncate w-full"
                      title={task.name}
                    >
                      {task.name}
                    </p>
                    <p
                      className="font-bold text-base text-gray-900 text-center truncate w-full mt-0"
                      title={a?.brothers?.full_name || ""}
                    >
                      {a?.brothers?.full_name || "Unassigned"}
                    </p>
                  </div>
                );
              })}
              {remaining > 0 && (
                <p className="text-xs text-gray-500 italic text-center py-0.5">
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
