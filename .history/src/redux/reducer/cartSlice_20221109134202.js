import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {

}

const cartAPI = 'http://localhost:8083/user/cart'

const addCart = createAsyncThunk('cart/addCart', 
        async(data,thunkAPI) => {
            try{
                const res = await axios.post(`${cartAPI}/add`,data,{
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                })
            }
            catch(e)
            {

            }
        })

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    extraReducers: {

    }
})