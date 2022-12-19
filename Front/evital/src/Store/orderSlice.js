import { createSlice } from "@reduxjs/toolkit";
const initialState={

    current_orders:[],
    history_orders:[]
}

export const orderSlice=createSlice({
    name:'order',
    initialState,

    reducers:{
        setOrderData:(state,action)=>{
            const data=action.payload;
            console.log(data);
            state.current_orders=data.filter((order)=>order.status);
            state.history_orders=data.filter((order)=>!order.status);
        }
    }
});


export const {setOrderData}=orderSlice.actions;
export default orderSlice.reducer;