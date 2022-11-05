import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./redux/apiSlice";


const store = configureStore(
 {
    reducer: {
        getApiProduct: apiSlice,
        login: loginReducer
    }
 }   
)

export default store