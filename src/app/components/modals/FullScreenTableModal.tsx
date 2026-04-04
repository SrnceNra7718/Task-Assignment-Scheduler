import { useEffect } from "react";
import { createPortal } from "react-dom";
import { format } from "date-fns";
import { X } from "lucide-react";
import { EventWithAssignments, Task } from "../../../types/database";
import { AssignmentsTable } from "../AssignmentsTable";

interface FullScreenTableModalProps {
  isOpen: boolean;
  onClose: () => void;
  events: EventWithAssignments[];
  tasks: Task[];
  currentDate: Date;
}

export function FullScreenTableModal({
  isOpen,
  onClose,
  events,
  tasks,
  currentDate,
}: Readonly<FullScreenTableModalProps>) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex flex-col bg-white"
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      aria-modal="true"
      aria-label="Full screen table view"
    >
      {/* Modal Header */}
      <div className="flex-shrink-0 border-b border-gray-200 px-6 py-4 flex items-center justify-center bg-white">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-semibold text-gray-900">
            {format(currentDate, "MMMM yyyy")}
          </h1>
          <p className="text-sm text-gray-500 mt-1 text-center">
            Task assignments for the month
          </p>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors justify-end absolute right-4 top-4"
          aria-label="Close full screen view"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
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
    </div>,
    document.body,
  );
}
