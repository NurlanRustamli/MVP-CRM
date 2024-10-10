import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    "token": "",
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        changeToken: (state, action) => {
            state.token = action.payload
        }
    }
})

export const { changeToken } = counterSlice.actions

export default counterSlice.reducer