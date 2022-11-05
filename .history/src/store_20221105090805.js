import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./redux/apiSlice";
import userSlice from "./redux/userSlice";


const store = configureStore(
 {
    reducer: {
        getApiProduct: apiSlice,
        login: userRedcer
    }
 }   
)

export default store