import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counterSlice"
import passReducer from './passSlice'

export const store = configureStore({
  reducer: {
    counter:counterReducer,
    pass:passReducer
  },
})