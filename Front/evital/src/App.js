import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import Login from './Component/Login';
import Cart from './Component/Cart';
import Aboutus from './Component/Aboutus';
import NotFound from './Component/NotFound';
import Register from './Component/Register';
import { Route,Routes } from 'react-router-dom';
import {store} from './Store/store';
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setData } from './Store/dataSlice';

import { setCartData } from "./Store/cartSlice";


const App=() =>{
  const user='abc';
  const dispatch=useDispatch();
  useEffect(()=>{
    async function fetchProducts(){
      const result=await axios.get("http://localhost:8000/product");
    
      if(result){
        // console.log(result);
        dispatch(setData(result.data.products));
      }
    }

    fetchProducts();
  },[])

  useEffect(()=>{
    async function fetchCartProducts(){
      const result=await axios.get(`http://localhost:8000/product/cart/${user}`);
    
      if(result){
        dispatch(setCartData(result.data.cart_items));
      }
    }

    fetchCartProducts();
  },[])


  return (
    
      <div className="main_container">
        <Header/>
        <Routes>
            {["/home","/", "/products"].map((path, index) => 
                <Route path={path} element={<Home/>} key={index} />
            )}
            {/* <Route path="/" element={<Home/>}></Route> */}
            {/* <Route path="/aboutus" element={<Aboutus/>}></Route> */}
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
                    
        </Routes>
      </div>
    
    
  );
}

export default App;
