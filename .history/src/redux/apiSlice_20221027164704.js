import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    listProduct,
    message,
    loading : true,
}

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
            [getAPI.pending]: (state,action) => {
                state.loading = true
            },
            [getAPI.fulfilled]: (state,action) => {
                state.loading = false;
                state.listProduct = action.payload

            },
            [getAPI.rejected] : (state, action) => {
                state.message = 'get api fail'
            }
        }
    }
)

export const { getAPI }  = apiSlice.actions; 

export default apiSlice