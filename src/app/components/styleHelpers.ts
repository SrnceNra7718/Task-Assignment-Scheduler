export const getTaskColor = (taskName: string): string => {
  const colors: Record<string, string> = {
    "AV-1": "bg-blue-100 text-blue-700 border-blue-200",
    "AV-2": "bg-purple-100 text-purple-700 border-purple-200",
    CAMERA: "bg-pink-100 text-pink-700 border-pink-200",
    "ATTENDANCE/AUDITORIUM": "bg-indigo-100 text-indigo-700 border-indigo-200",
    "ENTRANCE-1": "bg-emerald-100 text-emerald-700 border-emerald-200",
    "ENTRANCE-2": "bg-teal-100 text-teal-700 border-teal-200",
    "ENTRANCE-3": "bg-cyan-100 text-cyan-700 border-cyan-200",
  };
  return colors[taskName] || "bg-gray-100 text-gray-700 border-gray-200";
};

export const getEventTypeColor = (eventTypeName: string): string => {
  return eventTypeName === "MIDWEEK"
    ? "bg-yellow-100 text-yellow-700 border-yellow-200"
    : "bg-green-100 text-green-700 border-green-200";
};
