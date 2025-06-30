import App from "@/App";
import Dashboard from "@/pages/Dashboard";
import ErrorPage from "@/pages/ErrorPage";
import Success from "@/pages/Success";
import Task from "@/pages/Task";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <App/>,
        Component: App,
    
    children: [
      {
        index: true,
        // path: "task",
        Component: Task,
      },
      {
        path: "task",
        Component: Task,
      },
      {
        path: "user",
        Component: User,
      },
      {
        path: "dashboard",
        Component: Dashboard,
      },
      {
          path: "success",
          Component: Success,
        },
        {
            path: "error",
            Component: ErrorPage,
      },
    ],
  },
]);

export default router;