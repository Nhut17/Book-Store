import { combineReducers, configureStore } from "@reduxjs/toolkit";
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
  } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }

  const rootReducer = combineReducers({
    product: productSlice,
        user: userSlice
  })
  
// const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore(
 {
    reducer: {
        
    }
 }   
)

export default store