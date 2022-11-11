import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    listCart: [],
    success: false
}

// get all categories
export const getAllCategories = createAsyncThunk('')


const categorySlice = createSlice({
    name: 'category',
    initialState,
    extraReducers: {

    }
})