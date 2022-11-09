import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {

}

const cartAPI = 'http://localhost:8083/user/cart'

const addCart = createAsyncThunk('cart/addCart')

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    extraReducers: {

    }
})