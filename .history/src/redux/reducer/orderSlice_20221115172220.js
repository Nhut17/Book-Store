import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {

}


export const createOrder = createAsyncThunk('order/create',
    async (data, thunkAPI) => {
        try {
            const token = localStorage.getItem('token')
            const headers = {
                Authorization: 'Bearer ' + token
            }
            const res = await axios.post('http://localhost:8083/user/order/create', data, {
                headers: headers

            });
            console.log()
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

        }
    }
})

export default orderSlice.reducer