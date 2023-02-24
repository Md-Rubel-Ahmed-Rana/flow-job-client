import apiSlice from "../api/apiSlice";


const candidateApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createCandidate: builder.mutation({
            query: (data) => ({
                method: "POST",
                url: "/api/candidates",
                body: data
            })
        })
    })
})

export const { useCreateCandidateMutation } = candidateApi