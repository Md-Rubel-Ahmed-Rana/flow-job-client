import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import candidatesReducer from './../features/candidate/candidateSlice';


const store = configureStore({
    reducer: {
      userReducer: userReducer,
      candidatesReducer: candidatesReducer 
    }
})

export default store