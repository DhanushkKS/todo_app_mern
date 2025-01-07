import { Navigate, RouteObject } from "react-router-dom";

import { TodoListPage } from "./routeComponents.ts";

export const useRouteObject = (): RouteObject[] => {
  return [
    { path: "/", element: <Navigate to="/todo" /> },
    {
      path: "/todo",
      element: <TodoListPage />,
    },
  ];
};
