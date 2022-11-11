import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    listCart: [],
    success: false
}

// get all categories
export const getAllCategories = create


const categorySlice = createSlice({
    name: 'category',
    initialState,
    extraReducers: {

    }
})