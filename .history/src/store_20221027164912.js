import { configureStore } from "@reduxjs/toolkit";


const store = configureStore(
 {
    reducer: {
        getApiProduct: api
    }
 }   
)

export default store