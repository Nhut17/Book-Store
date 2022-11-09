import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    cart: [],
    loading: true,
    success: false,
}

const cartAPI = 'http://localhost:8083/user/cart'

// api add cart
export const addCart = createAsyncThunk('cart/addCart', 
        async(data,thunkAPI) => {
            try{
                const token = localStorage.getItem('token');
                console.log('token: ' + token );
                const res = await axios.post('http://localhost:8083/user/cart/add',data,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                return res.data
            }
            catch(e)
            {
                return thunkAPI.rejectWithValue('Error with api add cart')
            }
        })

// api get cart
export const getCart = createAsyncThunk('cart/getCart', async(data,thunkAPI) => {
    try{
        const res = await axios.get('http://localhost:8083/user/cart/add')
    }
    catch(e)
    {

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

export default cartSlice.reducer