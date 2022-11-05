import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./redux/userSlice";


const store = configureStore(
 {
    reducer: {
        getApiProduct: product,
        user: userSlice
    }
 }   
)

export default store