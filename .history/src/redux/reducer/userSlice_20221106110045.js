import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    user: null,
    error: false,
    loading: false,
    completed: false,
    message: ''
}

const loginAPI = 'http://localhost:8083/login'

export const loginUser = createAsyncThunk('user/login', async(data,thunkAPI) => {
    try{
        const res = await axios.post(loginAPI,data)

        const { token } = res.data;
        localStorage.setItem('token',token)  
        return res.data
    }
    catch(e)
    {
        return thunkAPI.rejectWithValue('Error with login api')
    }
})

export const getUser = createAsyncThunk('user/getUser', async(data,thunkAPI) =>{
    try{
        const res = await axios.get()

        return res.data
    }
    catch(e){
        return thunkAPI.rejectWithValue('Error with user api')
    }
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        
    }
    extraReducers: {
        [loginUser.pending]: (state,action) => {
            state.loading = true
        },
        [loginUser.fulfilled]: (state,action) => {
            state.loading = false;
            state.completed = true;
            state.user = action.payload;
        },
        [loginUser.rejected]: (state,action) => {
            state.message = 'failed';
            state.completed = false
        }
    }
})


export default userSlice.reducer