import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    listCart: []
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    extraReducers: {

    }
})