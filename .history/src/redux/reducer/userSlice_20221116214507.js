import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import { getCart } from './cartSlice'

const initialState = {
    user: null,
    error: false,
    loading: false,
    success: false,
    message: '',
    successRegister: false,
    listUser: []
}
const loginAPI = 'http://localhost:8083/login'
const registerAPI = 'http://localhost:8083/register'

// Get api Login User
export const loginUser = createAsyncThunk('user/login', async(data,thunkAPI) => {
    try{
        const res = await axios.post(loginAPI,data)
        localStorage.setItem('token', res.data.token)
        thunkAPI.dispatch(getCart())
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
                try{
                    const res = await axios.post(registerAPI,data)

                    return res.data
                }
                catch(e){
                    return thunkAPI.rejectWithValue('Error with api register')
                }
            })

// Get api user
export const getUser = createAsyncThunk('user/getUser', async(data,thunkAPI) =>{
    try{
        const res = await axios.get()

        return res.data
    }
    catch(e){
        return e.message
    }
})



// Get Delete User
export const deleteUser = createAsyncThunk('user/delete', async(email,thunkAPI) =>{
    try{
        const token = localStorage.getItem('token')
        const headers = {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
        const res = await axios.delete('http://localhost:8083/admin/users/delete',{
            email: email
        },{
                headers: headers,
        })

        return res.data
    }
    catch(e){
        return e.message
    }
})
// Get All User
export const getAllUser = createAsyncThunk('user/getAllUser', async(data,thunkAPI) =>{
    try{
        const token = localStorage.getItem('token')
        const headers = {
            Authorization: 'Bearer ' + token
        }
        const res = await axios.get('http://localhost:8083/admin/users/getAllUser',{
                headers: headers,
        })

        return res.data
    }
    catch(e){
        return e.message
    }
})



const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logoutAdmin: (state,action) => {
            state.user = null
        }
    },
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
        },
        [registerUser.fulfilled]: (state,action) => {
            state.message = action.payload.message;
            state.successRegister = action.payload.success;
           
        },
        [registerUser.rejected] : (state,action) => {
            state.message = action.payload.message;
            state.successRegister = action.payload.success
        },
        [getAllUser.fulfilled] : (state,action) => {
            state.listUser = action.payload
        }
    }
})

export const { logoutAdmin } = userSlice.actions

export default userSlice.reducer