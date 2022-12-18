import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataSlice';
import authReducer from './authSlice';
import cartReducer from './cartSlice';

export const store = configureStore({
    reducer:{
        data:dataReducer,
        auth:authReducer,
        cart:cartReducer
    },
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({
    //         serializableCheck: false,
    // }),
})


