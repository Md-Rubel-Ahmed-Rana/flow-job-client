import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../features/api/apiSlice";
import jobsReducer from "../features/jobs/jobsSlice";
import usersReducer from "../features/users/usersSlice";
import candidatesReducer from './../features/candidate/candidateSlice';


const store = configureStore({
    reducer: {
      [apiSlice.reducerPath] : apiSlice.reducer,
      usersReducer: usersReducer,
      candidatesReducer: candidatesReducer,
      jobsReducer: jobsReducer,
    },
    middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat(apiSlice.middleware)
})

export default store