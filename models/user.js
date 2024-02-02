const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {

        Name:{
            type : String ,
            required : true 
           } ,
        
           Email:{
            type: String,
            required : [true,"must be provided"]
           },
        
           password:{
            type : String,
            required : true
           },
           
           phoneNumber:{
            type : Number,
            required : true
           },  

    }
)

module.exports= mongoose.model("User",userSchema);
