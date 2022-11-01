import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = []

const getAPI = createAsyncThunk('api/getAll'() => {

})

const apiSlice = createSlice(
    {
        name:'api',
        initialState,
    }
)