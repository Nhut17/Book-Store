import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {

}

const cartAPI = 'http://localhost:8083/user/order'

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

            return res.data
        }
        catch (e) {
            return thunkAPI.rejectWithValue('Error API ')
        }
    })
// api add cart


export default cartSlice.reducer