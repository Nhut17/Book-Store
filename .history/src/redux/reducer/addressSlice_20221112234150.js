import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {

}

const getAllAddresses = createAsyncThunk('address/getAll', 
            async(data,thunkAPI) => {
                try{

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

    }
})