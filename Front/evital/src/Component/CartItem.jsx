import { useDispatch, useSelector } from 'react-redux';
import { deleteItemInCart, setCartData, deleteItem,changeQty} from '../Store/cartSlice';
import axios from 'axios';

const CartItem=({item})=>{
    const cart_items =useSelector((state)=>state.cart.cart_items);
    const dispatch=useDispatch();

    const removeItemHandler=async(e)=>{
        dispatch(deleteItem([item.email,item.id]));
    }

    const qtyChangeHandler=(change)=>{
        dispatch(changeQty([item.email,item.id,item.quantity,change]));
    }

    return (
        <>
            <div className="cart_item">
                <img className='cart_item_img' src={item.image?require(`../assest/images/${item.image}`) : require('../assest/images/logo.jpg')}></img>
                <div className="item_description">
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                </div>
                <div className="quantity_container">
                    <button className="quantity_button" onClick={()=>qtyChangeHandler(-1)}>-</button>
                    {item.quantity}
                    <button className="quantity_button" onClick={()=>qtyChangeHandler(1)}>+</button>
                </div>
                <button  className='formSubmitButton remove' onClick={removeItemHandler}>Remove</button>
            </div>
        </>

    )
};



export default CartItem;