import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    listCart: [],
    success: false,
    cateById : {},
}

// get all categories
export const getAllCategories = createAsyncThunk('category/getAll',
            async(data,thunkAPI) => {
                try{
                    const res = await axios.get('http://localhost:8083/category/getAllActive')

                    return res.data
                }
                catch(e){
                    return thunkAPI.rejectWithValue('Error with get all categories')
                }
            })

    
// Get category by id
export const getCategoryById = createAsyncThunk('category/getById',
            async(id,thunkAPI) => {
                try{
                    console.log('id: ' + id)
                    const res = await axios.get(`http://localhost:8083/category/${id}`)

                    return res.data
                }
                catch(e){
                    return thunkAPI.rejectWithValue('Error with get all categories')
                }
            })

const categorySlice = createSlice({
    name: 'category',
    initialState,
    extraReducers: {
        [getAllCategories.fulfilled] : (state,action) =>{
            state.listCart = action.payload
        },
        [getCategoryById.fulfilled] : (state,action) => {
            state.cateById = action.payload
        }
    }
})

export default categorySlice.reducer