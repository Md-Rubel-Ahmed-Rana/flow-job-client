import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../features/api/apiSlice";
import employerReducer from "../features/employer/employerSlice";
import jobsReducer from "../features/jobs/jobsSlice";
import usersReducer from "../features/users/usersSlice";
import candidatesReducer from './../features/candidate/candidateSlice';


const store = configureStore({
    reducer: {
      [apiSlice.reducerPath] : apiSlice.reducer,
      usersReducer: usersReducer,
      candidatesReducer: candidatesReducer,
      jobsReducer: jobsReducer,
      employerReducer: employerReducer
    },
    middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat(apiSlice.middleware)
})

export default store