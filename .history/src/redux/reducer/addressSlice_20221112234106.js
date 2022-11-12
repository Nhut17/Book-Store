import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {

}

const getAllAddresses = createAsyncThunk('address')

const addressSlice = createSlice({
    name: 'address',
    initialState,
    extraReducers: {

    }
})