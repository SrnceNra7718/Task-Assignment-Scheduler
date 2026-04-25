import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import BrothersPage from "./pages/BrothersPage";
import TasksPage from "./pages/TasksPage";
import CalendarPage from "./pages/CalendarPage";
import SettingsPage from "./pages/SettingsPage";
import Layout from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "dashboard", Component: Dashboard },
      { path: "brothers", Component: BrothersPage },
      { path: "tasks", Component: TasksPage },
      { path: "calendar", Component: CalendarPage },
      { path: "settings", Component: SettingsPage },
    ],
  },
]);
