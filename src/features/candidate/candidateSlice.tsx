import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

interface Candidate  {
    candidates: Object[],
    isLoading: Boolean,
    error: null | string | undefined
}

const initialState:  Candidate = {
    candidates: [],
    isLoading: false,
    error: null
}

export const candidateFetcher: any = createAsyncThunk("/candidates/candidateFetcher", async() => {
        const res = await fetch("users.json")
        const data = res.json()
        return data
})

const candidatesSlice: any = createSlice({
    name: "candidates",
    initialState,
    extraReducers(builder) {
        builder.addCase(candidateFetcher.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(candidateFetcher.fulfilled, (state, action) => {
            state.candidates = action.payload
            state.isLoading = false
        })
        builder.addCase(candidateFetcher.rejected, (state, action) => {
            state.error = action.error.message
        })
    },
    reducers: {
        createCandidate: (state, action) => {
            state.candidates = [...state.candidates, action.payload]
        },
        deleteCandidate: (state, action) => {
            const remaining = state.candidates.filter((candidate: any) => candidate.id !== action.payload.id)
            state.candidates = remaining
        },
        updateCandidate: (state, action) => {

        }
    }
})

export const {createCandidate, deleteCandidate, updateCandidate} = candidatesSlice.actions;

export default candidatesSlice.reducer