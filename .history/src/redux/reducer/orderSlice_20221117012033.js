import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    listOrder: []
}


export const createOrder = createAsyncThunk('order/create',
    async (data, thunkAPI) => {
        try {
            console.log(JSON.stringify(data))

            const token = localStorage.getItem('token')
            const headers = {
                Authorization: 'Bearer ' + token
            }
            const res = await axios.post('http://localhost:8083/user/order/create', data, {
                headers: headers

            });
            console.log('success')
            return res.data
        }
        catch (e) {
            return thunkAPI.rejectWithValue('Error API ')
        }
    })


// get all order
export const getAllOrder = createAsyncThunk('order/getAll',
    async (data, thunkAPI) => {
        try {

            const token = localStorage.getItem('token')
            const headers = {
                Authorization: 'Bearer ' + token
            }
            const res = await axios.get('http://localhost:8083/admin/orders/getAll', {
                headers: headers
            });
            return res.data
        }
        catch (e) {
            return thunkAPI.rejectWithValue('Error API ')
        }
    })

// accept order
export const acceptOrder = createAsyncThunk('order/accept',
    async (id, thunkAPI) => {
        try {

            const token = localStorage.getItem('token')
            const headers = {
                Authorization: 'Bearer ' + token
            }
            const res = await axios.post(1http://localhost:8083/admin/orders/getAll', {
                headers: headers
            });
            return res.data
        }
        catch (e) {
            return thunkAPI.rejectWithValue('Error API ')
        }
    })


const orderSlice = createSlice({
    name: 'order',
    initialState,
    extraReducers: {
        [createOrder.fulfilled] : (state,action) => {
            console.log('success')
        },
        [createOrder.rejected] : (state,action) => {
            console.log('rejected')
        },
        [getAllOrder.fulfilled]: (state,action) => {
            state.listOrder = action.payload
        }
    }
})

export default orderSlice.reducer