import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    listCart: [],
    success: false
}

// get all categories
export const getAllCategories = createAsyncThunk('category/getAll',
            async(data,thunkAPI) => {
                try{
                    const res = await 
                }
                catch(e){
                    return thunkAPI.rejectWithValue('Error with get all categories')
                }
            })


const categorySlice = createSlice({
    name: 'category',
    initialState,
    extraReducers: {

    }
})

export default categorySlice.reducer