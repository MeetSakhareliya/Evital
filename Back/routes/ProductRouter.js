const express =require('express');
const router = express.Router();

const productController= require("../controller/productController");

router.get('/',productController.getProducts);
router.get('/cart/:user',productController.getCartProducts);
router.post('/cart/delete',productController.deleteCartProduct);
router.post('/cart/changeQty',productController.changeItemQty);
router.post('/cart/add',productController.addItem);
router.get('/order/:user',productController.getOrderProducts);
module.exports=router;