import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_API_ENDPOINT}/`,
  prepareHeaders: (headers) => {
    return headers;
  },
  //
});
export { baseQuery };
