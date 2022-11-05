import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./redux/productSlice";
import userSlice from "./redux/userSlice";


const store = configureStore(
 {
    reducer: {
        getApiProduct: apiSlice,
        user: userSlice
    }
 }   
)

export default store