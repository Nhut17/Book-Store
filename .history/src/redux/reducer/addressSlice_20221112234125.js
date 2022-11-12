import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {

}

const getAllAddresses = createAsyncThunk('address/getAll', 
            async(data,thunkAPI))

const addressSlice = createSlice({
    name: 'address',
    initialState,
    extraReducers: {

    }
})