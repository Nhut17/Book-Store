import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {

}

const getAllAddresses = createAsyncThunk('address/getAll', 
            async(data,thunkAPI) => {
                try{
                    const token = localStorage.getItem('token')
                    const headers = {
                        
                    }
                    const res = await axios.get()
                }
                catch(e)
                {
                    return thunkAPI.rejectWithValue('Error API ')
                }
            })

const addressSlice = createSlice({
    name: 'address',
    initialState,
    extraReducers: {

    }
})