import { createSlice, TaskAbortError } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    user:''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        setAuthenticated: (state, action) => {
            // console.log(action.payload);
            state.isAuthenticated = action.payload[0];
            state.user=action.payload[1];
            // console.log(state.isAuthenticated);
        },

        setUnAuthenticated:(state,action)=>{
            state.isAuthenticated=false;
            state.user='';
        }
    }
})

export const { setAuthenticated,setUnAuthenticated } = authSlice.actions;
export default authSlice.reducer;