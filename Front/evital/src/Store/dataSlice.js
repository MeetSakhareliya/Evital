import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products:[]
}

export const dataSlice=createSlice({
    name:'data',
    initialState,

    reducers:{
        setData:(state,action)=>{
        
            state.products=[...action.payload];
        }
    }
})

export const {setData}=dataSlice.actions;
export default dataSlice.reducer;