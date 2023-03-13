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
        applyJob: builder.mutation({
            query: (data: {}) => ({
                method: "PATCH",
                url: "/api/jobs/apply",
                body: data
            }),
            invalidatesTags: ["jobs"],
        }),
        getSingleJob: builder.query({
            query: (id: string) => ({
                url: `/api/jobs/${id}`,
            }),
        }),
        getMyJobs: builder.query({
            query: (email: string) => ({
                url: `/api/jobs/myjobs/${email}`,
            }),
        })
    })
})

export const { 
    useCreateJobPostMutation, 
    useGetJobsQuery, 
    useDeleteJobMutation, 
    useGetSingleJobQuery,
    useApplyJobMutation,
    useGetMyJobsQuery
} = jobApi