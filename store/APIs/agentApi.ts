import { fetcherApi } from "../fectherApi";
export const agentApi = fetcherApi.injectEndpoints({
  endpoints(build) {
    return {
      getLoggedAgent: build.query({
        query: () => ({ url: "get-logged-agent" }),
        // providesTags: ["ForAgentProfile"],
      }),
      getAgentProperties: build.query({
        query: () => ({ url: "get-agent-properties" }),
        // providesTags: ["ForAgent"],
      }),
    };
  },
});

export const { useGetLoggedAgentQuery, useGetAgentPropertiesQuery } = agentApi;
