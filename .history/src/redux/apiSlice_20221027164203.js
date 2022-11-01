import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = []

const apiProduct = 'http://localhost:8083/product/getAll/0/2'

const getAPI = createAsyncThunk('api/getAll', async () => {
    try{
        const respone = await axios.get(apiProduct)
        return respone.data
    }
    catch(e)
    {

    }

})

const apiSlice = createSlice(
    {
        name:'api',
        initialState,
        extraReducers:
        {
            [getAp]
        }
    }
)