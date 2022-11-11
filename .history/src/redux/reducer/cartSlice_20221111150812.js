import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    cart: [],
    totalPrice: 0,
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
        const res = await axios.get('http://localhost:8083/user/cart/getAll',{
           headers:{
            Authorization: `Bearer ${token}`
           }
        })
        return res.data
    }
    catch(e)
    {

    }
})

// delete item cart 
export const deleteCart = createAsyncThunk('cart/delete', 
            async(id,thunkAPI) => {
                try{
                    const token = localStorage.getItem('token')
                    const headers = {
                        Authorization: 'Bearer ' + token
                    }
                    const res = await axios.delete(`http://localhost:8083/user/cart/${id}`,{headers: headers})
                    thunkAPI.dispatch(getCart())
                    return res.data
                }
                catch(e){

                }
            })

// Increase Item in Cart
export const increaseCart = createAsyncThunk('cart/increase', 
            async(id,thunkAPI) => {
                try{
                    const token = localStorage.getItem('token')
                    const headers = {
                        Authorization: 'Bearer ' + token
                    }
                    const res = await axios.post(`http://localhost:8083/user/cart/increase/${id}`,{},{headers: headers})
                    thunkAPI.dispatch(getCart())
                    return res.data
                }
                catch(e){

                }
            })

// Decrease Item in Cart
export const decreaseCart = createAsyncThunk('cart/decrease', 
            async(id,thunkAPI) => {
                try{
                    const token = localStorage.getItem('token')
                    const headers = {
                        Authorization: 'Bearer ' + token
                    }
                    const res = await axios.post(`http://localhost:8083/user/cart/decrease/${id}`,{},{headers: headers})
                    thunkAPI.dispatch(getCart())
                    return res.data
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
            state.success = true
            state.totalPrice = state.listCart.reduce((acc,val) => {
                return acc + ((val.quantity * val.price)
            },0)
        },
        [getCart.rejected] : (state,action) =>{

        },


    }
})

export default cartSlice.reducer