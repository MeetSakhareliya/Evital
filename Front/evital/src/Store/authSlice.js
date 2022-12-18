import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    user:''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        setAuthenticated: (state, action) => {
            console.log(action.payload);
            state.isAuthenticated = action.payload[0];
            state.user=action.payload[1];
            // console.log(state.isAuthenticated);
        }
    }
})

export const { setAuthenticated } = authSlice.actions;
export default authSlice.reducer;