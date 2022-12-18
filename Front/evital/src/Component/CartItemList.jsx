import CartItem from "./CartItem";
import '../CSS/cart.css';


const CardItemList=({cart_items})=>{

    return (
        <>
            <div className="cart_item_container">
                {cart_items.map((item)=>{
                    return <CartItem item={item} key={item.name+item.email}></CartItem>
                })
                }
            </div>
        </>
    )
};

export default CardItemList;