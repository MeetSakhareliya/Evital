import '../CSS/cart.css';
const Sidebar=(props)=>{    
    const total= props.cart_items.reduce(function(tot, arr) { 
        // console.log(arr);
        return tot + arr.price*arr.quantity;
      },0);
    const items=props.cart_items.map((item)=>{
        // total+=item.quantity*item.price;
        return (
            <>
                <div className='cart_item cart_sidebar' key={item.name+item.email}>
                    <p style={{"width":"15vh"}}>{item.name}</p>
                    <p>{item.price} * {item.quantity}</p>
                    <p>{item.quantity*item.price}</p>
                </div>
            </>
        )
    });
    return (
        <>
            <div className="sidebar">
                <div style={{"display":"flex","justifyContent":"space-between","padding":"0px 15px"}}>
                    <p style={{"width":"15vh"}}>{"Product"}</p>
                    <p>{"Price"}   {"Quantity"}</p>
                    <p>{"Total"}</p>
                </div>
                <hr style={{"width":"80%"}}></hr>
                {/* {props.cart_items.map((item)=>{
                    // total+=item.quantity*item.price;
                    return (
                        <>
                            <div className='cart_item cart_sidebar'>
                                <p style={{"width":"15vh"}}>{item.name}</p>
                                <p>{item.price} * {item.quantity}</p>
                                <p>{item.quantity*item.price}</p>
                            </div>
                        </>
                    )
                })} */}
                {items}
                <hr style={{"width":"80%"}}></hr>
                <p style={{"textAlign":"right"}}>{total}</p>
            
                <button className='formSubmitButton'>Place Order</button>
            </div>
        </>
    )
};

export default Sidebar;