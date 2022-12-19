const pool=require('../util/connection');
// const pool=require('../app');

exports.getProducts=(req,res,next)=>{
    pool.query(`select * from product;`,(err,result)=>{
        if(err){
            res.json({err:err.sqlMessage,errno:err.errno});
        }else{
            res.status(201).json({products:result});
        }
    });
};


exports.getCartProducts=(req,res,next)=>{
    
    const query=`SELECT * FROM cart inner join user on cart.email=user.email inner join product on product.id=cart.productId where cart.email="${req.params.user}"`;

    pool.query(query,(err,result)=>{
        if(err){
            console.log(err);
            res.json({err:err.sqlMessage,errno:err.errno});
        }else{
            
            result=result.map((item)=>{
                return {email:item.email,
                        quantity:item.quantity,
                        name:item.name,
                        id:item.id,
                        price:item.price,
                        image:item.image
                    };
            })
            res.status(201).json({cart_items:result});
        }
    });
}

exports.deleteCartProduct=(req,res,next)=>{
    const data=req.body.data;
    console.log(data);
    const query=`delete from cart where email="${data.email}" and productId="${data.id}"`;
    pool.query(query,(err,result)=>{
        if(err){
            res.json({err:err.sqlMessage,errno:err.errno});
        }else{
            res.status(201).json({msg:"deletion Successful"});
        }
    })
};

exports.changeItemQty=(req,res,next)=>{
    const data=req.body.data;
    console.log(data);
    const query=`update cart set quantity="${data.qty}" where email="${data.email}" and productId="${data.id}"`;
    pool.query(query,(err,result)=>{
        if(err){
            res.json({err:err.sqlMessage,errno:err.errno});
        }else{
            res.status(201).json({msg:"cart updated Successful"});
        }
    })
};

exports.addItem=(req,res,next)=>{
    const data=req.body.data;
 
    const query=`insert into cart values("${data.email}","${data.id}",1);`;
    pool.query(query,(err,result)=>{
        if(err){
            res.json({err:err.sqlMessage,errno:err.errno});
        }else{
            res.status(201).json({msg:"product added to the cart"});
        }
    })
};

exports.getOrderProducts=(req,res,next)=>{
    
    const query=`SELECT * FROM evital.order inner join user on order.email=user.email inner join product on product.id=order.productId where order.email="${req.params.user}"`;

    pool.query(query,(err,result)=>{
        if(err){
            console.log(err);
            res.json({err:err.sqlMessage,errno:err.errno});
        }else{
            console.log(result);
            result=result.map((item)=>{
                return {email:item.email,
                        quantity:item.quantity,
                        name:item.name,
                        id:item.id,
                        price:item.price,
                        image:item.image,
                        date:item.expecteddate,
                        status:item.orderStatus
                    };
            })
            res.status(201).json({order_items:result});
        }
    });
}




