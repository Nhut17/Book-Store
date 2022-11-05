import { configureStore } from "@reduxjs/toolkit";
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