import apiSlice from "../api/apiSlice";


const usersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                method: "POST",
                url: "/users",
                body: data
            })
        })
    })
})

export const {useRegisterMutation} = usersApi