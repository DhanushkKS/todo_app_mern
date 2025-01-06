import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../apiService.js"; // Assuming this is a base query setup using axios or fetch
import { HTTP_METHODS } from "../../constants.ts";
import { TODOS } from "../../helpers/url.ts"; // Update with the correct URL for tasks
import { Task, CreateTaskPayload } from "./types.ts"; // Import types for Task and CreateTaskPayload

const TAGS = { TASK: "TASK" };

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery,
  tagTypes: [TAGS.TASK],
  endpoints: (builder) => ({
    // Fetch all tasks
    getTasks: builder.query<Task[], void>({
      query: () => ({
        url: TODOS,
        method: HTTP_METHODS.GET,
      }),
      providesTags: [TAGS.TASK],
    }),

    // Fetch a single task by ID
    getTaskById: builder.query<Task, string>({
      query: (taskId) => ({
        url: `${TODOS}/${taskId}`,
        method: HTTP_METHODS.GET,
      }),
      providesTags: [TAGS.TASK],
    }),

    // Create a new task
    createTask: builder.mutation<Task, CreateTaskPayload>({
      query: (taskData) => ({
        url: TODOS,
        method: HTTP_METHODS.POST,
        body: taskData,
      }),
      invalidatesTags: [TAGS.TASK],
    }),
  }),
});

export const { useGetTasksQuery, useGetTaskByIdQuery, useCreateTaskMutation } =
  todoApi;
