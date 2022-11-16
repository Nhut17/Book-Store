import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getAllProduct } from "./productSlice"


const initialState = {
    listOrder: [],
    listOrderOfUser: [],
}

export const getAllOrderOfUser = createAsyncThunk('order/getAllOfUser',
    async (data, thunkAPI) => {
        try {
            const token = localStorage.getItem('token');
            console.log(token)
            const headers = {
                Authorization: 'Bearer ' + token
            }
            const res = await axios.get('http://localhost:8083/user/order/getAll', {headers})
            console.log(res.data)
            return res.data
        }
        catch (e) {
            return thunkAPI.rejectWithValue('Error with get all categories')
        }
    })
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
            const res = await axios.post(`http://localhost:8083/admin/order/accept/${id}`,'', {
                headers: headers
            });

            thunkAPI.dispatch(getAllOrder())
            thunkAPI.dispatch(getAllProduct())
            return res.data
        }
        catch (e) {
            return thunkAPI.rejectWithValue('Error API ')
        }
    })

// cancel order
export const cancelOrder = createAsyncThunk('order/cancel',
    async (id, thunkAPI) => {
        try {

            const token = localStorage.getItem('token')
            const headers = {
                Authorization: 'Bearer ' + token
            }
            const res = await axios.post(`http://localhost:8083/admin/order/deny/${id}`,'', {
                headers: headers
            });

            thunkAPI.dispatch(getAllOrder())
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
        [getAllOrderOfUser.fulfilled]: (state, action) => {
            state.listOrderOfUser = action.payload
        },
        [createOrder.fulfilled]: (state, action) => {
            console.log('success')
        },
        [createOrder.rejected]: (state, action) => {
            console.log('rejected')
        },
        [getAllOrder.fulfilled]: (state,action) => {
            state.listOrder = action.payload
        }
    }
})


export default orderSlice.reducer