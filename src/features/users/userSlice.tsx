import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

interface UserType  {
    users: Object[],
    isLoading: Boolean,
    error: null | string | undefined
}

const initialState:  UserType= {
    users: [],
    isLoading: false,
    error: null
}

export const userFetcher: any = createAsyncThunk("/users/userFetcher", async() => {
    const res = await fetch("users.json");
    const data = res.json();
    return data
})

const userSlice: any = createSlice({
    name: "users",
    initialState,
    extraReducers(builder) {
        builder.addCase(userFetcher.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(userFetcher.fulfilled, (state, action) => {
            state.users = action.payload
            state.isLoading = false
        })
        builder.addCase(userFetcher.rejected, (state, action) => {
            state.error = action.error.message
        })
    },
    reducers: {
        getUsers: (state, action) => {
            return state
        },
        createUser: (state, action) => {
            state.users = [...state.users, action.payload]
        },
        deleteUser: (state, action) => {

        },
        updateUser: (state, action) => {

        }
    }
})

export const {getUsers, createUser, deleteUser, updateUser} = userSlice.actions;

export default userSlice.reducer