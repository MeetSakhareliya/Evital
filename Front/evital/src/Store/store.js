import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataSlice';
import authReducer from './authSlice';
import cartReducer from './cartSlice';
import orderSlice from './orderSlice';

export const store = configureStore({
    reducer:{
        data:dataReducer,
        auth:authReducer,
        cart:cartReducer,
        order:orderSlice
    },
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({
    //         serializableCheck: false,
    // }),
})


