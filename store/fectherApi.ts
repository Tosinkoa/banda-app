import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
export const fetcherApi = createApi({
  reducerPath: "fetcherApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    // crendentials: "include" will face CORS if credential is not provided
    credentials: "same-origin",
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("token");
      if (token && !headers.get("authorization")) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [],
  endpoints(build) {
    return {};
  },
});
