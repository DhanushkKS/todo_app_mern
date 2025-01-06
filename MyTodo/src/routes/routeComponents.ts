import { lazy } from "react";

export const DummyRoute = lazy(() => import("../pages/Dummy"));

export const TodoListPage = lazy(() => import("../pages/Todo"));
export const CreateTdoPage = lazy(() => import("../pages/Todo/create"));
