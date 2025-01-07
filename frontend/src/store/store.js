import { configureStore } from "@reduxjs/toolkit";
import { studentSliceApi } from "../services/StudentApiSlice";

export const store = configureStore({
    reducer:{
        [studentSliceApi.reducerPath]:studentSliceApi.reducer
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(studentSliceApi.middleware)
})