import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    listCart: [],
    success: false
}

//


const categorySlice = createSlice({
    name: 'category',
    initialState,
    extraReducers: {

    }
})