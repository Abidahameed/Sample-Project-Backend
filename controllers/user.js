const user = require("../models/user");
const bcrypt = require("bcrypt");
const PostAllUser = async(req,res)=>
{

    const Mydata =  await user.findOne({Email:req.body.Email}).then( async Mydata =>
   {
            if(Mydata)
           {
           res.send (" THIS EMAIL IS ALREADY EXISTING , USE ANOTHER EMAILADDRESS");
            }
            else{
                            req.body.password =  await bcrypt.hash(req.body.password,10)
                             const data =  await user.create(req.body)
                              res.status(200).json({data});
                            
    
                                                   
            }

   })
         
    
    
};



const GetAllUser= async(req,res)=>
{
    const MyData = await user.find({}) ;
    res.status(200).json({MyData});

};
  

const GetLogin= async(req,res)=>
{
    
    const MyData = await user.findOne({Email:req.body.Email}).then(MyData=>
        {
    
            if (MyData)
            { 
                bcrypt.compare(req.body.password,MyData.password).then(status =>
                  {
                  if(status)
              {
                    res.status(200).json({MyData});
                  }
                   else  
                   {
    
                    res.send("INCORRECT PASSWORD ");
                   }
                }) 
             }
             else{
  
              res.send("INCORRECT EMAIL ");
             }
  

        })
    

};


module.exports = {PostAllUser,GetAllUser,GetLogin};

