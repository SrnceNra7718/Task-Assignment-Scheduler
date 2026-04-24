import { format, parseISO } from "date-fns";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { EventWithAssignments, Task } from "../../types/database";
import { getEventTypeColor } from "./styleHelpers";
import EventDetailModal from "./modals/EventDetailModal";

interface AssignmentsTableProps {
  events: EventWithAssignments[];
  tasks: Task[];
  showEditColumn: boolean;
  onEditEvent?: (event: EventWithAssignments) => void;
}

export function AssignmentsTable({
  events,
  tasks,
  showEditColumn,
  onEditEvent,
}: Readonly<AssignmentsTableProps>) {
  const [selectedEvent, setSelectedEvent] = useState<EventWithAssignments | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRowClick = (event: EventWithAssignments) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (events.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No events scheduled for this month
      </div>
    );
  }

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-24">
                Date
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-32">
                Meeting
              </th>
              {tasks.map((task) => (
                <th
                  key={task.id}
                  className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  {task.name}
                </th>
              ))}
              {showEditColumn && (
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-10">
                  Edit
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {events.map((event) => (
              <tr
                key={event.id}
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => handleRowClick(event)}
              >
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {format(parseISO(event.event_date), "MMM d")}
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex px-3 py-1 text-xs font-medium rounded-full border ${getEventTypeColor(
                      event.event_type?.name || "",
                    )}`}
                  >
                    {event.event_type?.name}
                  </span>
                </td>
                {tasks.map((task) => {
                  const assignment = event.assignments.find(
                    (a: any) => a.tasks?.id === task.id,
                  );
                  return (
                    <td key={task.id} className="px-4 py-4 text-sm text-gray-600">
                      {(assignment as any) ? (
                        <span className="font-medium">
                          {(assignment as any).brothers?.full_name || "-"}
                        </span>
                      ) : (
                        <span className="text-gray-400">Unassigned</span>
                      )}
                    </td>
                  );
                })}
                {showEditColumn && (
                  <td className="px-4 py-4 whitespace-nowrap text-sm">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onEditEvent?.(event);
                      }}
                      className="text-indigo-600 hover:text-indigo-900 transition-colors"
                      title="Edit assignments"
                      aria-label="Edit assignments"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && selectedEvent && (
        <EventDetailModal event={selectedEvent} tasks={tasks} onClose={handleCloseModal} />
      )}
    </>
  );
}
