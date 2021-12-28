import { createSlice } from '@reduxjs/toolkit'
import getAuth from '../../api_calls/getAuth'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    value: {},
  },
  reducers: {
    setAuth: (state, action) => {
    //   state.value = action.payload
        state.value = action.payload
    },
  },
})

export const { setAuth } = authSlice.actions

export default authSlice.reducer