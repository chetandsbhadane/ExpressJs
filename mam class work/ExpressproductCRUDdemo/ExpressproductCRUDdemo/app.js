//add all imports
const express=require("express");
const app=express()
const path=require("path");
const bodyparser=require("body-parser");
const bodyParser = require("body-parser");
//all url specific functions are in the file ./routes/router.js
const routes=require("./routes/router")

//configure the application
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs");


//add all static reference setings
app.set(express.static(path.join(__dirname,"public")))

//add all middlewares
app.use(bodyParser.urlencoded({extended:false}))
app.use("/css",express.static(path.resolve(__dirname,"public/css")))
app.use("/js",express.static(path.resolve(__dirname,"public/js")))

///url specific functions
app.use("/",routes)

//start the server
app.listen(3001,function(){
    console.log("server started at port 3001")
})

module.exports=app;

