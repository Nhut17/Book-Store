import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    listCart: [],
    success: false
}

// get all categories
export const getAllCategories = createAsyncThunk('category/getAll',
            async(data,thunkAPI) => {
                try{
                    const res = await axios.get('http://localhost:8083/category/getAll')

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
        [getAllCategories.fulfilled] : (state)
    }
})

export default categorySlice.reducer