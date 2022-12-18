import Card from "./Card";
import '../CSS/item.css';
import { useSelector,useDispatch } from "react-redux";
import { changeQty, addItem } from "../Store/cartSlice";
import { useNavigate } from "react-router-dom";


const Item=({item})=>{
    // const item=props.item;

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const user=useSelector((state)=>state.auth.user);
    const cart_items=useSelector((state)=>state.cart.cart_items);
    const dispatch =useDispatch();
    const navigate=useNavigate();

    const addtoCartHandler=()=>{
        
        if(!isAuthenticated)  navigate('/login');
        else{
            
            const isPresent=cart_items.find((data)=>{return data.id==item.id});
            if(isPresent) dispatch(changeQty([isPresent.email,isPresent.id,isPresent.quantity,1]));
            else dispatch(addItem([user,item.id]));
        }
    };

    return (
        <>
            <div className="card">
                <img className="item_image" src={item.image?require(`../assest/images/${item.image}`) : require('../assest/images/logo.jpg')}></img>
                <p>{item.name}</p>
                <p><span>Price {item.price}</span></p>
                <button className="formSubmitButton" onClick={addtoCartHandler}>ADD TO CART</button>
            </div>
        </>
    );
};

export default Item;