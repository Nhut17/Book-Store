import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {

}

const getAllAddresses = createAsyncThunk('address/getAll')

const addressSlice = createSlice({
    name: 'address',
    initialState,
    extraReducers: {

    }
})