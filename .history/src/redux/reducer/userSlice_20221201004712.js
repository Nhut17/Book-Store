import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { getCart } from './cartSlice'

const initialState = {
    user: null,
    error: false,
    loading: false,
    success: false,
    message: '',
    successRegister: true,
    listUser: [],
    currentUser: null,
    successLogin: true,
    successSendOTP: false,
    successChangePassword: false,
}
const loginAPI = 'http://localhost:8083/login'
const registerAPI = 'http://localhost:8083/register'

// Get api Login User
export const loginUser = createAsyncThunk('user/login', async (data, thunkAPI) => {
    try {
        const res = await axios.post(loginAPI, data)
        localStorage.setItem('token', res.data.token)
        thunkAPI.dispatch(getCart())
        return res.data
    }
    catch (e) {
        if(!e.respone){
            throw e
        }
        return thunkAPI.rejectWithValue(e.errorMessage)
    }
})

export const changeUserAvatar = createAsyncThunk('user/changeAvatar',
    async (data, thunkAPI) => {
        try {
            // const { id, proImage } = data

            let dataFile = new FormData()
            dataFile.append('image', data)

            const token = localStorage.getItem('token')
            const headers = {
                Authorization: 'Bearer ' + token,
                "Content-Type": `multipart/form-data`,
            }
            const res = await axios.post(`http://localhost:8083/user/profile/avatar`, dataFile, {
                headers: headers
            })
            thunkAPI.dispatch(getUser())

            return res.data

        }
        catch (e) {
            return thunkAPI.rejectWithValue('Error with get product detail')
        }
    })
// Get api register
export const registerUser = createAsyncThunk('user/register',
    async (data, thunkAPI) => {

        console.log(data)
        try {
            const res = await axios.post(registerAPI, data)

            return res.data
        }
        catch (e) {
            return thunkAPI.rejectWithValue('Error with api register')
        }
    })



// Get current api user
export const getUser = createAsyncThunk('user/getUser', async (data, thunkAPI) => {
    try {
        const token = localStorage.getItem('token')
        const headers = {
            Authorization: 'Bearer ' + token,
        }
        const res = await axios.get(`http://localhost:8083/user/profile`, {
            headers: headers,
        })
        // console.log('check res',res)
        return res.data
    }
    catch (e) {
        return e.message
    }
})



// Get Delete User
export const deleteUser = createAsyncThunk('user/delete', async (id, thunkAPI) => {
    try {
        const token = localStorage.getItem('token')
        const headers = {
            Authorization: 'Bearer ' + token,
        }
        const res = await axios.delete(`http://localhost:8083/admin/users/${id}`, {
            headers: headers,
        })

        thunkAPI.dispatch(getAllUser())

        return res.data
    }
    catch (e) {
        return e.message
    }
})
// Get All User
export const getAllUser = createAsyncThunk('user/getAllUser', async (data, thunkAPI) => {
    try {
        const token = localStorage.getItem('token')
        const headers = {
            Authorization: 'Bearer ' + token
        }
        const res = await axios.get('http://localhost:8083/admin/users/getAllUser', {
            headers: headers,
        })

        return res.data
    }
    catch (e) {
        return e.message
    }
})

// Send OTP
export const sendOTP = createAsyncThunk('user/sendOTP', async (email, thunkAPI) => {
    try {
        const token = localStorage.getItem('token')
        const headers = {
            Authorization: 'Bearer ' + token,
        }
        const data = {
            email: email
        }

        console.log(data)
        const res = await axios.post('http://localhost:8083/recoveryPassword/getOtp',data)
        console.log('done')

        return res.data
    }
    catch (e) {
        return e.message
    }
})

// Change password
export const changePassword = createAsyncThunk('user/changePassword', async (data, thunkAPI) => {
    try {
        const token = localStorage.getItem('token')
        const headers = {
            Authorization: 'Bearer ' + token,
        }
       

        console.log(data)
        const res = await axios.post('http://localhost:8083/recoveryPassword/checkOtp',data, {
            headers: headers
        })
        console.log('done')

        return res.data
    }
    catch (e) {
        return e.message
    }
})


// Change password
export const changePasswordCurrent = createAsyncThunk('user/changePasswordCurrent', async (data, thunkAPI) => {
    try {
        const token = localStorage.getItem('token')
        const headers = {
            Authorization: 'Bearer ' + token,
        }
       

        console.log(data)
        const res = await axios.post('http://localhost:8083/user/changepassword',data, {
            headers: headers
        })

        return res.data
    }
    catch (e) {
        return e.message
    }
})


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logoutAdmin: (state, action) => {
            state.user = null
        },
        resetSuccess: (state, action) => {
            state.successLogin = true
            state.successRegister = true
        },
        resetSuccessSendOTP: (state, action) => {
            state.successSendOTP = false
        },
        resetSuccessChangePassword: (state, action) => {
            state.successChangePassword = false
        },
    },
    extraReducers: {
        [loginUser.pending]: (state, action) => {
            state.loading = true
        },
        [loginUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.success = true;
            state.user = action.payload;
            state.successLogin = true;
        },
        [loginUser.rejected]: (state, action) => {
            state.message = 'T??i kho???n ho???c password kh??ng ????ng';
            state.successLogin = false;
            state.success = false
            state.error = true;
            state.loading = false;
        },
        [registerUser.fulfilled]: (state, action) => {
            state.message = action.payload.message;
            state.successRegister = true;

        },
        [registerUser.rejected]: (state, action) => {
            state.message = 'T??i kho???n ho???c gmail ???? t???n t???i';
            state.successRegister = false
        },
        [getAllUser.fulfilled]: (state, action) => {
            state.listUser = action.payload
        },
        [getUser.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [changeUserAvatar.fulfilled]: (state, action) => {
            console.log('success update image')
        },
        [changeUserAvatar.rejected]: (state, action) => {
            console.log('fail update image')
        },
        [sendOTP.fulfilled]: (state, action) => {
            state.successSendOTP = true
        },
        [sendOTP.rejected]: (state, action) => {
            state.successSendOTP = false
        },
        [changePassword.fulfilled]: (state, action) => {
            state.successChangePassword = true
        },
        [changePassword.rejected]: (state, action) => {
            state.successChangePassword = false
        },
    }
})

export const { logoutAdmin, resetSuccess, resetSuccessSendOTP, resetSuccessChangePassword } = userSlice.actions

export default userSlice.reducer