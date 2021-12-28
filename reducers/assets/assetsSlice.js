import { createSlice } from '@reduxjs/toolkit'
import getAuth from '../../api_calls/getAuth'

export const assetsSlice = createSlice({
  name: 'assets',
  initialState: {
    value: {},
  },
  reducers: {
    setAssets: (state, action) => {
    //   state.value = action.payload
        state.value = action.payload
    },
  },
})

export const { setAssets } = assetsSlice.actions

export default assetsSlice.reducer