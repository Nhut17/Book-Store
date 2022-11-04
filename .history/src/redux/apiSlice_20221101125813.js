import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    listProduct: [],
    message: '',
    loading: true ,
}

const apiProduct = 'http://localhost:8083/product/getAll/0/1'

export const getProducts = createAsyncThunk('api/getAll', async (data,thunkAPI) => {
    try{
        const res = await axios.get(apiProduct)
        console.log(res.data)
        return res.data
    }
    catch(e)
    {
        return thunkAPI.rejectWithValue(e)
    }

})

const apiSlice = createSlice(
    {
        name:'api',
        initialState,
        extraReducers:
        {
            [getProducts.pending]: (state,action) => {
                state.loading = true
            },
            [getProducts.fulfilled]: (state,action) => {
                state.loading = false;
                console.log('action: '+ action)
                state.listProduct = action.payload

            },
            [getProducts.rejected] : (state, action) => {
                state.message = 'get api fail'
            }
        }
    }
)

export const {  }  = apiSlice.actions; 

export default apiSlice.reducer