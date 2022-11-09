import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../redux/reducer/productSlice";
import userSlice from "../redux/reducer/";


const store = configureStore(
 {
    reducer: {
        product: productSlice,
        user: userSlice
    }
 }   
)

export default store