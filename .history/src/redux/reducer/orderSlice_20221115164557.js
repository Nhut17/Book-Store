import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {

}


export const orderSlice = createAsyncThunk('order/create',
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


    

export default orderSlice.reducer