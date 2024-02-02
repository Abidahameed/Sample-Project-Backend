const category = require("../models/category");
const product = require("../models/products");
const path = require('path');

   
const postAllProducts = async(req,res)=>
{  
    try{
        const prdimg = await product.findOne({Name:req.body.Name}).then(async prdimg =>{
      
            if(prdimg!=null){
            
            res.send("THIS PRODUCT NAME IS ALREADY EXISTING ,USE A DIFFERENT ONE");
                 }
      else{
      
    
            const prdobj = new product({ 

                Name: req.body.Name,
                price:req.body.price,
                category:req.body.category,
                size:req.body.size,
                Availability:req.body.Availability,
                colour:req.body.colour,
                image :req.body.image
               
             })
          
          const MyData = await prdobj.save()
         res.status(200).json({MyData});
            }
        })
          }           
    catch(error)
    {
        res.send(error.message);
    }    


};




const getAllProducts= async(req,res)=>
{ 
     try{
    const MyData = await product.find({}) ;

    res.status(200).json({MyData});
    }
catch(error){
    res.send(error.message);
}
};



const deleteproducts= async(req,res)=>
{
    try{
    const id = req.query.id;
    const MyData = await product.findByIdAndDelete(id) ;
    res.status(200).json({MyData});
    }
    catch(error){
        res.send(error.message);
    }
};


const getfilteredproducts= async(req,res)=>
{
    try{
    const MyData = await product.find(req.query) ;
    res.status(200).json({MyData});
    }
    catch(error){
        res.send(error.message);
    }
};



const updateproducts= async(req,res)=>
{
    try{
    const id = req.query.id;
    const updates = req.body;
    const prdimg = await product.findOne({Name:req.body.Name}).then(async prdimg =>{
      
        if(prdimg!=null){
        
        res.send("THIS PRODUCT NAME IS ALREADY EXISTING ,USE A DIFFERENT ONE");
             }
  else{
    
    const MyData = await product.findByIdAndUpdate(id,updates) ;
    res.status(200).json({MyData});
     }
   
    })

}
    catch(error){
        res.send(error.message);
    }
};


module.exports={postAllProducts,getAllProducts,deleteproducts,getfilteredproducts,updateproducts};
         