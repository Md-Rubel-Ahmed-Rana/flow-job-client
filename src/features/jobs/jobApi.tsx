import apiSlice from "../api/apiSlice"


const jobApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createJobPost: builder.mutation({
            query: (data) => ({
                method: "POST",
                url: "/api/jobs",
                body: data
            }),
            invalidatesTags: ["jobs"]
        }),
        getJobs: builder.query({
            query: () => ({
                url: "/api/jobs",
            }),
            providesTags: ["jobs"]
        }),
        deleteJob: builder.mutation({
            query: (id: string) => ({
                method: "DELETE",
                url: `/api/jobs/${id}`,
            }),
            invalidatesTags: ["jobs"],
        }),
        getSingleJob: builder.query({
            query: (id: string) => ({
                url: `/api/jobs/${id}`,
            }),
        })
    })
})

export const { useCreateJobPostMutation, useGetJobsQuery, useDeleteJobMutation, useGetSingleJobQuery  } = jobApi