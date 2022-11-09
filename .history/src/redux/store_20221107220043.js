import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../redux/reducer/productSlice";
import userSlice from "../redux/reducer/userSlice";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

  

const store = configureStore(
 {
    reducer: {
        product: productSlice,
        user: userSlice
    }
 }   
)

export default store