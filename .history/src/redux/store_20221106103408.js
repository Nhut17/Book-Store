import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../redux/";
import userSlice from "./redux/userSlice";


const store = configureStore(
 {
    reducer: {
        product: productSlice,
        user: userSlice
    }
 }   
)

export default store