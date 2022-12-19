import OrderList from "./OrderList";
import { useDebugValue, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setOrderData } from "../Store/orderSlice";
import { useSelector } from "react-redux";
import axios from "axios";

const Order=()=>{
    const currentOrders=useSelector((state)=>state.order.current_orders);
    const historyOrders=useSelector((state)=>state.order.history_orders);
    const user=useSelector((state)=>state.auth.user);
    const dispatch=useDispatch();

    useEffect(()=>{
        async function fetchOrderProducts(){
            
            const result=await axios.get(`http://localhost:8000/product/order/${user}`);
            if(result){
                console.log(result);
                dispatch(setOrderData(result.data.order_items));
            }
            
        }
    
        try{
            fetchOrderProducts();
        }
        catch(err){
            console.log(err);
        }
      },[])

    return (
        <>
            <div className="currentOrders order_container">
                current_orders:
                {
                    currentOrders.length==0 && <h2>NO current Orders</h2>
                }
                {
                    currentOrders.length!=0 && currentOrders.map((order)=>{
                        return <OrderList item={order}></OrderList>
                    })
                }
            </div>
            <div className="history order_container">
                Previous Orders
                {
                    historyOrders.length==0 && <h2>Not Orders</h2>
                }
                {
                    historyOrders.length!=0 && historyOrders.map((order)=>{
                        return <OrderList item={order}></OrderList>
                    })
                }
            </div>
        </>
    )
};

export default Order;