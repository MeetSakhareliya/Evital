import { createSlice,current } from "@reduxjs/toolkit";
import axios from "axios";
import { startTransition } from "react";
import { useSelector } from "react-redux";

const initialState={
    cart_items:[]
}

export const cartSlice=createSlice({
    name:'cart',
    initialState,

    reducers:{
       addItemtoCart:(state,action)=>{
            state.cart_items.push({
                email:action.payload[0],
                id:action.payload[1],
                quantity:1
            });
       },

       changeItemQtyInCart:(state,action)=>{
            const data={
                email:action.payload[0],
                id:action.payload[1],
                new_qty:action.payload[2]
            }
            
            const temp=JSON.parse(JSON.stringify(state.cart_items));
            const new_cart=temp.map((item) => { if(item.email===data.email && item.id===data.id) item.quantity=data.new_qty; return item});
            console.log(new_cart);
            state.cart_items=new_cart;
       },

       deleteItemInCart:(state,action)=>{
            const data={
                email:action.payload[0],
                id:action.payload[1]
            }
            
            const temp=JSON.parse(JSON.stringify(state.cart_items));
            const new_cart=temp.filter((item) => {return item.email!==data.email || item.id!==data.id});
            state.cart_items=[...new_cart];
        },

       setCartData:(state,action)=>{
        state.cart_items=action.payload;
       }


    }
})

export const deleteItem=([email,id])=>{
    return async(dispatch)=>{
        const removeItem=async()=>{
            const res=await axios.post('http://localhost:8000/product/cart/delete',{
                data:{
                    email:email,
                    id:id
                }
            });
        }

        try{
            await removeItem();
            dispatch(deleteItemInCart([email,id]));
        }catch(err){
            console.log(err);
        }
    };
}

export const addItem=([email,id])=>{
    return async(dispatch)=>{
        const addItemCall=async()=>{
            const res=await axios.post('http://localhost:8000/product/cart/add',{
                data:{
                    email:email,
                    id:id
                }
            });
            console.log(res);
        }
        try{
            await addItemCall();
            const result=await axios.get(`http://localhost:8000/product/cart/${email}`);
    
            if(result){
                dispatch(setCartData(result.data.cart_items));
            }
        }catch(err){
            console.log(err);
        }
    };
}



export const changeQty=([email,id,qty,change])=>{
    return async(dispatch)=>{
        if(qty==1 && change==-1){ dispatch(deleteItem([email,id]));}
        else{
            const changeItemQty=async()=>{
                const res=await axios.post('http://localhost:8000/product/cart/changeQty',{
                    data:{
                        email:email,
                        id:id,
                        qty:qty+change
                    }
                });
                console.log(res);
            }
    
            try{
                await changeItemQty();
                dispatch(changeItemQtyInCart([email,id,qty+change]));
            }catch(err){
                console.log(err);
            }
        }
    
    };
}



export const {addItemtoCart,deleteItemInCart,setCartData,changeItemQtyInCart}=cartSlice.actions;
export default cartSlice.reducer;