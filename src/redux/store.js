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
import cartSlice from "./reducer/cartSlice";
import categorySlice from "./reducer/categorySlice";
import addressSlice from "./reducer/addressSlice";
import orderSlice from "./reducer/orderSlice";
import authorSlice from "./reducer/authorSlice";
import commentSlice from "./reducer/commentSlice";
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const rootReducer = combineReducers({
  product: productSlice,
  user: userSlice,
  cart: cartSlice,
  category: categorySlice,
  address: addressSlice,
  order: orderSlice,
  author: authorSlice,
  comment: commentSlice
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)