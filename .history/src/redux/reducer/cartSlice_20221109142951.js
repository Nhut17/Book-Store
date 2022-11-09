import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    cart: 'null',
    loading: true,
    success: false,
}

const cartAPI = 'http://localhost:8083/user/cart'

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
                console.log('done3')
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

export default cartSlice.reducer