const express =require("express");
const bodyparser =require('body-parser');
const cors=require('cors');

const authRoutes=require('./routes/AuthRouter');
const productRoutes=require('./routes/ProductRouter');
const pool =require('./util/connection');
const app=express();


app.use(cors());
app.use(bodyparser.json());
app.use('/product',productRoutes);
app.use('/auth',authRoutes);

const server=app.listen(8000);
// module.exports=pool;
// const

