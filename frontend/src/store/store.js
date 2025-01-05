import { studentApiSlice } from "@/services/studentApiSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        [studentApiSlice.reducerPath]:studentApiSlice.reducer,
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(studentApiSlice.middleware),
});