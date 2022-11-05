import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./redux/apiSlice";


const store = configureStore(
 {
    reducer: {
        getApiProduct: apiSlice,
        login: 
    }
 }   
)

export default store