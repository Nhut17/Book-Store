import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    listProduct: [],
    listProductCate: [],
    productDetail: {},
    priceDeal: 0,
    message: '',
    loading: true,
    listProductAdmin: []
}

const apiProduct = 'http://localhost:8083/product/getAll'

export const getProducts = createAsyncThunk('product/getAll', async (data, thunkAPI) => {
    try {
        const res = await axios.get(apiProduct)
        return res.data
    }
    catch (e) {
        return thunkAPI.rejectWithValue('Error with get api')
    }

})


// get product category
export const getProductCate = createAsyncThunk('product/getProductCate',
    async (id, thunkAPI) => {
        try {
            const res = await axios.get(`http://localhost:8083/product/category/${id}`)

            return res.data
        }
        catch (e) {

        }
    })



// get product detail
export const getProductDetail = createAsyncThunk('product/productDetail',
    async (id, thunkAPI) => {
        try {

            const res = await axios.get(`http://localhost:8083/product/${id}`)
            return res.data

        }
        catch (e) {
            return thunkAPI.rejectWithValue('Error with get product detail')
        }
    })




// Delete Product
export const deleteProduct = createAsyncThunk('product/delete',
    async (id, thunkAPI) => {
        try {

            const token = localStorage.getItem('token')
            const headers = {
                Authorization: 'Bearer ' + token,
            }
            const res = await axios.delete(`http://localhost:8083/admin/product/${id}`, {
                headers: headers
            })

            thunkAPI.dispatch(getAllProduct())
            return res.data

        }
        catch (e) {
            return thunkAPI.rejectWithValue('Error with get product detail')
        }
    })

// add image product
export const addImageProduct = createAsyncThunk('product/addImage',
    async (data, thunkAPI) => {
        try {


                let dataFile = new FormData()
                dataFile.append('image', data)

            const token = localStorage.getItem('token')
            const headers = {
                Authorization: 'Bearer ' + token,
                "Content-Type": `multipart/form-data`,
            }
            
            console.log('start')
            const res = await axios.post(`http://localhost:8083/product/3/image`, dataFile, {
                headers: headers
            })

            console.log('done')

            return res.data

        }
        catch (e) {
            return thunkAPI.rejectWithValue('Error with get product detail')
        }
    })


// create new product
export const createProduct = createAsyncThunk('product/create',
    async (data, thunkAPI) => {
        try {
            

            console.log(data)

            const token = localStorage.getItem('token')
            const headers = {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json'
    
            }
            const res = await axios.post('http://localhost:8083/admin/product/create', {
                data
            }, {
                headers: headers
            })

            return res.data

        }
        catch (e) {
            return thunkAPI.rejectWithValue('Error with get product detail')
        }
    })



// get all product admin
export const getAllProduct = createAsyncThunk('product/getAdmin',
    async (data, thunkAPI) => {
        try {

            const token = localStorage.getItem('token')
            const headers = {
                Authorization: 'Bearer ' + token,
            }
            const res = await axios.get(`http://localhost:8083/admin/products/getAll`, {
                headers: headers
            })


            return res.data

        }
        catch (e) {
            return thunkAPI.rejectWithValue('Error with get product detail')
        }
    })



const productReducer = createSlice(
    {
        name: 'product',
        initialState,
        extraReducers:
        {
            [getProducts.pending]: (state, action) => {
                state.loading = true
            },
            [getProducts.fulfilled]: (state, action) => {
                state.loading = false;
                state.listProduct = action.payload

            },
            [getProducts.rejected]: (state, action) => {
                state.message = 'get api fail'
            },
            [getProductDetail.fulfilled]: (state, action) => {
                state.productDetail = action.payload
                state.priceDeal = state.proPrice - state.proPrice * (state.proSale / 100)
            },
            [getProductCate.fulfilled]: (state, action) => {
                state.listProductCate = action.payload
            },
            [getAllProduct.fulfilled]: (state, action) => {
                state.listProductAdmin = action.payload
            }
        }
    }
)

export const { } = productReducer.actions;

export default productReducer.reducer