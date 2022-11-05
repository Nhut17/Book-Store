import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    user: [],
    loading: true,
}

const loginAPI = 'http://localhost:8083/login'

export const loginUser = createAsyncThunk('user/login', async(data,thunkAPI) => {
    try{
        const res = await axios.get(loginAPI)

        console.log(res.data)
        return res.data
    }
    catch(e)
    {
        return thunkAPI.rejectWithValue('Error with login api')
    }
})

const userReducer = createSlice({
    name: 'user',
    initialState,
    extraReducers: {

    }
})


export default userReducer.reducer