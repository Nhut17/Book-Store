import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    listProduct: [],
    message: '',
    loading: true ,
}

const apiProduct = 'http://localhost:8083/product/getAll/0/2'

export const getAPI = createAsyncThunk('api/getAll', async () => {
    try{
        const res = await axios.get(apiProduct)
        console.log(res.data)
        return res.data
    }
    catch(e)
    {
        return e.message
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
                console.log('action: '+ action.payload.data)
                state.listProduct = action.payload.data

            },
            [getAPI.rejected] : (state, action) => {
                state.message = 'get api fail'
            }
        }
    }
)

// export const {  }  = apiSlice.actions; 

export default apiSlice