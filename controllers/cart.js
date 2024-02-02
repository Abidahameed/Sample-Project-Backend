const cart =require("../models/cart");
const product= require("../models/products");

const PostCartProducts =async(req,res) =>
    {
             const item = await cart.findOne({user_Id:req.query.user_Id,products_Id:req.query.products_Id}).then( async items=>
               { if(items!=null){
                  res.send("THIS IS  PRODUCT IS ALREADY EXISTS IN CART");
               
               }
                   else{

                    const prdctdatadata  =  await product.findById(req.query.products_Id).then(async data =>{
                      if(data!=null){
                              if(data.Availability==0){
                                  res.send("out of stock")
                              }
                             else{
                  
                  const prdprice = await product.findById(req.query.products_Id)
                  const obj = prdprice.price;
                  
                        const cartobj = new cart({
                  
                          user_Id:req.query.user_Id,
                          products_Id:req.query.products_Id,
                           quantity:1,
                           totalprice:obj
                  
                        })
                    const data =  await cartobj.save();
                    res.status(200).json({data});

                  
                             }
                      }     
                           })
                      }
                  })
               }
 const GetCart = async(req,res) =>
 {

  
  const CartItems = await cart.find({user_Id:req.query.user_Id}).populate({path:'products_Id'});
  
     
     res.status(200).json({CartItems});
   
 };

const removecartitem = async(req,res) =>
{

          const cartdata = await cart.findOne({user_Id:req.query.user_Id,products_Id:req.query.products_Id});
     
         
            await cart.deleteOne({user_Id:req.query.user_Id,products_Id:req.query.products_Id});
         
   
};
      

// const IncrmntCartQuantity = async (req,res) =>
// {
//            const prdctdata  =  await product.findById(req.query.products_Id).then(async data =>{
//               if(data!=null){
//                         if(data.Availability==0){
//                             res.send("out of stock")
//                                    }
//                          else{
                
                  

//                      const cartquantity= await cart.findOneAndUpdate({user_Id:req.query.user_Id,products_Id:req.query.products_Id},{$inc:{"quantity":+1}},
//                         {multi:true});

//                         const prdprice = await product.findById(req.query.products_Id)
//                         const obj = prdprice.price;
//                         const total= await cart.findOneAndUpdate({user_Id:req.query.user_Id,products_Id:req.query.products_Id},{$inc:{"totalprice":+obj}},{multi:true});

//                         }
//                       }
//                       })
      
// }


// const DcrmntCartQuantity = async (req,res) =>
// {
//        const prdctdata  =  await product.findById(req.query.products_Id).then(async data =>{
//          if(data!=null){
                        
                
                  

//                      const cartquantity= await cart.findOneAndUpdate({user_Id:req.query.user_Id ,products_Id:req.query.products_Id},{$inc:{"quantity":-1}},
//                         {multi:true});
                         
//                         const prdprice = await product.findById(req.query.products_Id)
//                         const obj = prdprice.price;

//                         const total= await cart.findOneAndUpdate({Name:req.query.Name,products_Id:req.query.products_Id},{$inc:{"totalprice":-obj}},{multi:true});

                        
//                       }
//                       })
//        }



module.exports ={PostCartProducts,GetCart,removecartitem};



