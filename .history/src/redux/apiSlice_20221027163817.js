import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = []

const getAPI = createAsyncThunk('api/getAll', async () => {
    
})

const apiSlice = createSlice(
    {
        name:'api',
        initialState,
    }
)