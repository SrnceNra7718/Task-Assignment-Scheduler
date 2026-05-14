import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X, FileImage } from "lucide-react";
import { format } from "date-fns";
import { toPng } from "html-to-image";
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

  const captureAsImage = async () => {
    const modalElement = document.getElementById("fullscreen-modal-content");
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
        alert("Table image copied to clipboard!");
      }
    } catch (err) {
      console.error("Failed to capture modal:", err);
      alert("Failed to copy image to clipboard");
    }
  };

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
      {/* Action buttons - positioned outside captured content */}
      <div className="absolute top-4 right-4 flex gap-2 z-10">
        <button
          onClick={captureAsImage}
          className="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors"
          aria-label="Copy as image"
          title="Copy table as image"
        >
          <FileImage className="w-5 h-5 text-gray-600" />
        </button>
        <button
          onClick={onClose}
          className="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors"
          aria-label="Close full screen view"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Captured content area */}
      <div id="fullscreen-modal-content" className="flex flex-col h-full">
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
    </div>,
    document.body
  );
}
