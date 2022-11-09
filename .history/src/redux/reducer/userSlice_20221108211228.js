import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    user: null,
    error: false,
    loading: false,
    success: false,
    message: ''
}

const loginAPI = 'http://localhost:8083/login'
const register = 'http://localhost:8083/register'

// Get api Login User
export const loginUser = createAsyncThunk('user/login', async(data,thunkAPI) => {
    try{
        const res = await axios.post(loginAPI,data)
        localStorage.setItem('token', res.data.token)
        return res.data
    }
    catch(e)
    {
        return thunkAPI.rejectWithValue('Error with login api')
    }
})

// Get api register
export const registerUser = createAsyncThunk('user/register' , 
            async (data,thunkAPI) => {
                
            })

// Get api user
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
    
    extraReducers: {
        [loginUser.pending]: (state,action) => {
            state.loading = true
        },
        [loginUser.fulfilled]: (state,action) => {
            state.loading = false;
            state.success = true;
            state.user = action.payload;
        },
        [loginUser.rejected]: (state,action) => {
            state.message = 'failed';
            state.success = false;
            state.error = true;
            state.loading = false;
        }
    }
})


export default userSlice.reducer