import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
    user: [],
    loading: true,
}


export const loginUser = createAsyncThunk('user/login', async(data,thunkAPI) => {
    try{
        const res = 

    }
    catch(e)
    {

    }
})

const userReducer = createSlice({
    name: 'user',
    initialState,
    extraReducers: {

    }
})


export default userReducer.reducer