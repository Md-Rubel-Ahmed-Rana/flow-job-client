import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Jobs {
    jobs: object[],
    isLoading: boolean,
    error: null | undefined | string
}


const initialState: Jobs = {
    jobs: [],
    isLoading: false,
    error: null
}


export const jobsFetcher: any = createAsyncThunk("jobs/jobsFetcher", async() => {
        const res = await axios.get("jobs.json")
        const data = res.data
        return data
})

const jobsSlice = createSlice({
    name: "jobs",
    initialState: initialState,
    extraReducers(builder) {
        builder.addCase(jobsFetcher.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(jobsFetcher.fulfilled, (state, action) => {
            state.jobs =  action.payload
            state.isLoading = false
        })
        builder.addCase(jobsFetcher.rejected, (state, action) => {
            state.jobs =  []
            state.isLoading = false
            state.error = action.payload
        })
    },
    reducers: {
        createJob: (state, action) => {
            state.jobs = [...state.jobs, action.payload]
        },
        deleteJob: (state, action) => {
            const remainingJobs = state.jobs.filter((job: any) => job.id !== action.payload.id)
            state.jobs = remainingJobs
        }
    }
})


export const {createJob, deleteJob} = jobsSlice.actions;

export default jobsSlice.reducer