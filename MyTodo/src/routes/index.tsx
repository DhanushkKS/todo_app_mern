import { RouteObject } from "react-router-dom";

import { TodoListPage } from "./routeComponents.ts";

export const useRouteObject = (): RouteObject[] => {
  return [
    {
      path: "/todo",
      element: <TodoListPage />,
    },
  ];
};
