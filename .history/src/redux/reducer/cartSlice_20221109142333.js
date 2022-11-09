import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    cart: [],
    loading: true,
    success: false,
}

const cartAPI = 'http://localhost:8083/user/cart'

export const addCart = createAsyncThunk('cart/addCart', 
        async(data,thunkAPI) => {
            try{
                console.log('done')
                const token = JSON.parse(localStorage.getItem('token'));
                console.log('done')
                console.log('done')
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