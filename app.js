const express = require("express")
const app = express();
const connectDB = require("./db/connect");
const PORT = process.env.PORT||5000;
const product_routes = require("./routes/products");
const user_routes = require("./routes/user");
const cart_routes = require("./routes/cart");
const category_routes = require("./routes/category");
const order_routes = require("./routes/order");
const path = require('path');


app.get("/",(req,res)=>{
    res.send("HIII WELCOME TO PORT 5000");
});
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use('/public',express.static(path.join (__dirname,'../public')))

 
app.use("/api/products", product_routes);
app.use("/api/user",user_routes);  
app.use("/api/cart",cart_routes);
app.use("/api/category",category_routes);
app.use("/api/orders",order_routes);
const start = async()=>{
    try{ 
        await connectDB();
        app.listen(PORT,()=>
             {
    console.log(`${PORT} connected`);
              });
}
catch(error){
    console.log(error);
           }
      };
      start();

