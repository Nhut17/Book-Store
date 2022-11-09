import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    cart: [],
    loading:
}

const cartAPI = 'http://localhost:8083/user/cart'

const addCart = createAsyncThunk('cart/addCart', 
        async(data,thunkAPI) => {
            try{
                const res = await axios.post(`${cartAPI}/add`,data,{
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                })

                return res.data
            }
            catch(e)
            {
                return thunkAPI.rejectWithValue('Error with api add cart')
            }
        })

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    extraReducers: {
        [addCart.fulfilled]: (state,action) => {
            
        },
        [addCart.rejected]: (state,action) =>{

        }
    }
})