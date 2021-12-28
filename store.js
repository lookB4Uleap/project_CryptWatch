import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/auth/authSlice'
import assetsReducer from './reducers/assets/assetsSlice'

export default configureStore({
  reducer: {
      auth: authReducer,
      assets: assetsReducer,
  },
})