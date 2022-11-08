import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    listProduct: [],
    productDetail: {},
    message: '',
    loading: true ,
}

const apiProduct = 'http://localhost:8083/product/getAll'

export const getProducts = createAsyncThunk('product/getAll', async (data,thunkAPI) => {
    try{
        const res = await axios.get(apiProduct)
        console.log(res.data)
        return res.data
    }
    catch(e)
    {
        return thunkAPI.rejectWithValue('Error with get api')
    }

})

export const getProductDetail = createAsyncThunk('')

const productReducer = createSlice(
    {
        name:'product',
        initialState,
        extraReducers:
        {
            [getProducts.pending]: (state,action) => {
                state.loading = true
            },
            [getProducts.fulfilled]: (state,action) => {
                state.loading = false;
                state.listProduct = action.payload

            },
            [getProducts.rejected] : (state, action) => {
                state.message = 'get api fail'
            }
        }
    }
)

export const {  }  = productReducer.actions; 

export default productReducer.reducer