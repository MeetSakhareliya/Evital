const OrderList=({item})=>{
    return (
        <>
            <div className="cart_item">
                <img className='cart_item_img' src={item.image?require(`../assest/images/${item.image}`) : require('../assest/images/logo.jpg')}></img>
                <div className="item_description">
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                </div>
                <div >
                    <p>Quantity:</p>
                    {item.quantity}
                </div>
                <div className="item_description">   
                    <p>Expected Date:</p>
                    <p>{item.date}</p>
                </div>
            </div>
        </>
    )
};

export default OrderList;