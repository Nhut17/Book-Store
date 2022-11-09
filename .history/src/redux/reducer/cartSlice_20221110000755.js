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
                const headers = {
                    Authorization: 'Bearer ' + token
                }
                console.log('token: ' + token );
                const res = await axios.post('http://localhost:8083/user/cart/add',data,{headers: headers})
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
        const token = localStorage.token
        console.log(token)
        const res = await axios.get('http://localhost:8083/user/cart/getAll',{
           headers:{
            Authorization: `Bearer ${token}`
           }
        })
        console.log(res.data)
        return res.data
    }
    catch(e)
    {

    }
})

// delete item cart 
export const deleteCart = createAsyncThunk('cart/delete', 
            async(data,thunkAPI) => {
                try{
                    const res = await axios.post(`http://localhost:8083/user/cart`)
                }
                catch(e){

                }
            })


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    extraReducers: {
        [addCart.fulfilled]: (state,action) => {
            
        },
        [addCart.rejected]: (state,action) =>{

        },
        [getCart.fulfilled] : (state,action) =>{
            state.cart = action.payload
            state.succes = true
        },
        [getCart.rejected] : (state,action) =>{

        }

    }
})

export default cartSlice.reducer