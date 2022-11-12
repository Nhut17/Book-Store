import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    listAddress: [],
}

const getAllAddresses = createAsyncThunk('address/getAll', 
            async(data,thunkAPI) => {
                try{
                    const token = localStorage.getItem('token')
                    const headers = {
                        Authorization: 'Bearer ' + token
                    }
                    const res = await axios.get('http://localhost:8083/user/address/getAll',{
                        headers: headers
                    })

                    return res.data
                }
                catch(e)
                {
                    return thunkAPI.rejectWithValue('Error API ')
                }
            })

const addressSlice = createSlice({
    name: 'address',
    initialState,
    extraReducers: {
        [getAllAddresses.fulfilled] : (state,action) => {
            state.listAddress = action.payload
        },  
    }
})

export default addressSlice.reducer