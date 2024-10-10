import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    "password": "",
}

export const passSlice = createSlice({
    name: "pass",
    initialState,
    reducers: {
        changePass: (state,action) => {
            state.password = action.payload
        }
    }
})

export const {changePass } = passSlice.actions

export default passSlice.reducer