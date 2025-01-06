import { RouteObject } from "react-router-dom";

import { CreateTdoPage, TodoListPage } from "./routeComponents.ts";

export const useRouteObject = (): RouteObject[] => {
  return [
    {
      // path: "/dummy",
      // element:  <DummyRoute />,
      path: "/todo",
      element: <TodoListPage />,
    },
    {
      path: "/todo/create",
      element: <CreateTdoPage />,
    },
  ];
};
