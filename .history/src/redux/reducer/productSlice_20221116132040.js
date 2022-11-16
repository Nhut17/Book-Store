import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    listProduct: [],
    listProductCate: [],
    productDetail: {},
    priceDeal: 0,
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


// get product category
export const getProductCate = createAsyncThunk('product/getProductCate',
        async(id,thunkAPI) => {
            try{
                const res = await axios.get(`http://localhost:8083/product/category/${id}`)

                return res.data
            }   
            catch(e)
            {

            }
        })



// get product detail
export const getProductDetail = createAsyncThunk('product/productDetail', 
        async (id,thunkAPI) => {
            try{

                const res = await axios.get(`http://localhost:8083/product/${id}`)
                return res.data

            }
            catch(e){
                return thunkAPI.rejectWithValue('Error with get product detail')
            }
        })

export const addImageProduct = createAsyncThunk('product/addImage', 
        async (id,thunkAPI) => {
            try{
                const token = localStorage.getItem('token')
                const headers = {
                    Authorization: 'Bearer ' + token
                }
                const res = await axios.post(`http://localhost:8083/product/${id}/image`,{})
                return res.data

            }
            catch(e){
                return thunkAPI.rejectWithValue('Error with get product detail')
            }
        })

  

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
            },
            [getProductDetail.fulfilled] : (state,action) => {
                state.productDetail = action.payload
                state.priceDeal = state.proPrice - state.proPrice * (state.proSale / 100)
            },
            [getProductCate.fulfilled]: (state,action) => {
                state.listProductCate = action.payload
            }
        }
    }
)

export const {  }  = productReducer.actions; 

export default productReducer.reducer