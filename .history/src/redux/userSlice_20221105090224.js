import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user: [],
    loading: true,
}



const userReducer = createSlice({
    name: 'user',
    initialState,
    extraReducers: {

    }
})