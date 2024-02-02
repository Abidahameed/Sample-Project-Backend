const mongoose  = require("mongoose");
const productSchema = new mongoose.Schema({
  
    Name :{
    type : String ,
    required : [true,"must be provided"]
   } ,

   price:{
    type: Number,
    required : [true,"must be provided"]
   },

   category:{
    type : String,
    required : [true,"must be provided"]
   },
   
   
   size:{
    type : String,
    required : [true,"must be provided"]
   },  

   colour:{
    type : String,
    required : [true,"must be provided"]
   },  

   Availability:{
    type : Number,
    required : [true,"must be provided"]
   }  ,

     image:{
    type : String,
    required : [true,"must be provided"]
   }  


})

module.exports= mongoose.model("product",productSchema);
