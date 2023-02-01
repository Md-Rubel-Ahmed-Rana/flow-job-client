import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "../features/jobs/jobsSlice";
import candidatesReducer from './../features/candidate/candidateSlice';


const store = configureStore({
    reducer: {
      candidatesReducer: candidatesReducer,
      jobsReducer: jobsReducer 
    }
})

export default store