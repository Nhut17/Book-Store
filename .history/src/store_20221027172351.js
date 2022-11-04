import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./redux/apiSlice";


const store = configureStore(
 {
    reducers: {
        getApiProduct: apiSlice,
    }
 }   
)

export default store