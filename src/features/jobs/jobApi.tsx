import apiSlice from "../api/apiSlice"


const jobApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createJobPost: builder.mutation({
            query: (data) => ({
                method: "POST",
                url: "/api/jobs",
                body: data
            })
        }),
        getJobs: builder.query({
            query: () => ({
                url: "/api/jobs",
            })
        })
    })
})

export const { useCreateJobPostMutation, useGetJobsQuery } = jobApi