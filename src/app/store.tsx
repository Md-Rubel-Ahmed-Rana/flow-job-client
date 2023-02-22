import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "../features/jobs/jobsSlice";
import usersReducer from "../features/users/usersSlice";
import candidatesReducer from './../features/candidate/candidateSlice';


const store = configureStore({
    reducer: {
      usersReducer: usersReducer,
      candidatesReducer: candidatesReducer,
      jobsReducer: jobsReducer,
    }
})

export default store