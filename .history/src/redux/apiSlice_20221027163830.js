import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = []

const getAPI = createAsyncThunk('api/getAll', async () => {
    const respone = await axios.get()
})

const apiSlice = createSlice(
    {
        name:'api',
        initialState,
    }
)