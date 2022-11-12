import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    listAddress: [],
}

// Get all addresses
export const getAllAddresses = createAsyncThunk('address/getAll', 
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

// Get all addresses
export const updateAddresses = createAsyncThunk('address/update', 
            async(data,thunkAPI) => {
                try{
                    const token = localStorage.getItem('token')
                    const headers = {
                        Authorization: 'Bearer ' + token
                    }
                    const res = await axios.post('http://localhost:8083/user/address/change',data,{
                        headers: headers
                    })
                     
                    thunkAPI.dispatch(getAllAddresses())
                    return res.data
                }
                catch(e)
                {
                    return thunkAPI.rejectWithValue('Error API ')
                }
            })

// Get delete addresses
export const deleteAddresses = createAsyncThunk('address/delete', 
            async(id,thunkAPI) => {
                try{
                    const token = localStorage.getItem('token')
                    const headers = {
                        Authorization: 'Bearer ' + token
                    }
                    const res = await axios.post(`http://localhost:8083/user/address/${id}`,{
                        headers: headers
                    })
                     
                    thunkAPI.dispatch(getAllAddresses())
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