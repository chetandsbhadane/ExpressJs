//add all imports
const express=require("express");
const app=express()
const bodyParser = require("body-parser");
//all url specific functions are in the file ./routes/router.js
const routes=require("./routes/router")

//configure the application
//add all middlewares
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
///url specific functions
app.use("/",routes)

//start the server
app.listen(3001,function(){
    console.log("server started at port 3001")
})

module.exports=app;

