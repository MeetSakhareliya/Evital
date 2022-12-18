import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CardItemList from "./CartItemList";
import { setCartData } from "../Store/cartSlice";
import Sidebar from "./Sidebar";
import Auth from "./Auth";
import axios from 'axios';
import '../CSS/cart.css';


// const cart_items=[
//     {
//         name:"iphone",
//         id:1,
//         price:70000,
//         qty:1,
//     },
//     {
//         name:"samsung s12",
//         id:2,
//         price:70000,
//         qty:1,
//     },
//     {
//         name:"macbook",
//         id:3,
//         price:70000,
//         qty:1,
//     }
// ]

const Cart =()=>{
    const cart_items=useSelector((state)=>state.cart.cart_items);

    // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    // const user=useSelector((state)=>state.auth.user);
    const user='abc';
    const dispatch =useDispatch();
    // const navigate=useNavigate();

    

    return(
        <>
            <Auth>
                <div className="container cart_container">
                    <CardItemList cart_items={cart_items}></CardItemList>
                    <Sidebar cart_items={cart_items}></Sidebar>
                </div>
            </Auth>
        </>
    );
}

export default Cart;