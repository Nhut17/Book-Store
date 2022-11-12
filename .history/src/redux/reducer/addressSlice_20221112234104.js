import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {

}

const getAllAddresses = createAsyncThunk('')

const addressSlice = createSlice({
    name: 'address',
    initialState,
    extraReducers: {

    }
})