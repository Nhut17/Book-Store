import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    listAuthor: [],
    success: false,
    authorById: {},
}

// get all author
export const getAllAuthor = createAsyncThunk('author/getAll',
    async (data, thunkAPI) => {
        try {
            const res = await axios.get('http://localhost:8083/author/getAll')
            return res.data
        }
        catch (e) {
            return thunkAPI.rejectWithValue('Error with get all categories')
        }
    })


// Get category by id
export const getAuthorxById = createAsyncThunk('author/getById',
    async (id, thunkAPI) => {
        try {
            const res = await axios.get(`http://localhost:8083/author/${id}`)

            return res.data
        }
        catch (e) {
            return thunkAPI.rejectWithValue('Error with get all categories')
        }
    })

const authorSlice = createSlice({
    name: 'author',
    initialState,
    extraReducers: {
        [getAllAuthor.fulfilled]: (state, action) => {
            state.listAuthor = action.payload
        },
        [getAuthorxById.fulfilled]: (state, action) => {
            state.authorById = action.payload
        }
    }
})

export default authorSlice.reducer