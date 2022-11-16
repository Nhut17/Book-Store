import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    listCommentById: []
}

export const createComment = createAsyncThunk('comment/create',
    async (data, thunkAPI) => {
        try {
            console.log(JSON.stringify(data))

            const token = localStorage.getItem('token')
            const headers = {
                Authorization: 'Bearer ' + token
            }
            const res = await axios.post('http://localhost:8083/user/comment/create', data, {
                headers: headers

            });
            console.log('success')
            return res.data
        }
        catch (e) {
            return thunkAPI.rejectWithValue('Error API ')
        }
    })
export const getCommentById = createAsyncThunk('order/getCommentById',
    async (id, thunkAPI) => {
        try {
            const token = localStorage.getItem('token');
            console.log(token)
            const headers = {
                Authorization: 'Bearer ' + token
            }
            const res = await axios.get(`http://localhost:8083/comment/product/${id}`, { headers })
            console.log(res.data)
            return res.data
        }
        catch (e) {
            return thunkAPI.rejectWithValue('Error with get all categories')
        }
    })

const commentSlice = createSlice({
    name: 'comment',
    initialState,
    extraReducers: {
        [getCommentById.fulfilled]: (state, action) => {
            state.listCommentById = action.payload
        },
        [createComment.fulfilled]: (state, action) => {
            console.log('success')
        },
        [createComment.rejected]: (state, action) => {
            console.log('rejected')
        }
    }
})


export default commentSlice.reducer