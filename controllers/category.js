const category = require("../models/category");


const postcategory = async (req,res)=>
{
    try{
         
      const catgryobj= new category({
         
      Name : req.body.Name,
      image: req.file.filename
      }) 
const MyPic = await category.findOne({Name:req.body.Name}).then(async MyPic =>{
      if(MyPic!=null){
            res.send("THIS CATEGORY IS ALREADY EXISTS ");
      }
      else{
              await catgryobj.save()
                  
      }
})


   }
   catch(error){
     
    res.send(error.message);
   }
}


const viewcategory = async(req,res)=>
{

const data = await category.find();
res.send(data);



}
module.exports = {postcategory,viewcategory};

