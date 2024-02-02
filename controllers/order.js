const order = require('../models/order');
const cart = require('../models/cart');


const postorder = async (req,res)=>{


     const orderobj = await cart.findOne({user_Id:req.body.user_Id,products_Id:req.body.products_Id}); 
   
     const objoforder = new order({
       user_Id:req.body.user_Id,
       products_Id:req.body.products_Id,
       quantity:req.body.quantity,
       subtotal:req.body.subtotal,
     })
const orderlist = await objoforder.save();
 res.status(200).json({orderlist});

await cart.deleteOne({user_Id:req.body.user_Id,products_Id:req.body.products_Id});        

};


const getorder = async (req,res)=>{

const vieworder = await order.find().populate({path:'products_Id'}).populate({path:'user_Id'});
res.status(200).json({vieworder});
};

      

const userorderhistory = async(req,res)=>{
    const userorder = await order.find({user_Id:req.query.user_Id}).populate({path:'products_Id'});
  res.status(200).json({userorder});
}
module.exports = {getorder,postorder,userorderhistory};
   