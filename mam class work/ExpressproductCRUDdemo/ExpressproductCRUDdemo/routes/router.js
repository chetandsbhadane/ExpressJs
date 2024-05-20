const express=require("express");
const router=express.Router();

//get connection
const connection=require("../db/dbconnection")

//get all products from database and display it in table format
router.get("/products",function(req,resp){
    console.log("in priducts url")
    connection.query("select * from product",function(err,data,fields){

        if(err){
            resp.status(404).send("No data found")
        }else{
            console.log("data received"+data.length)
            //send the data to index.ejs
            //  ./views/index.ejs
            resp.render("index",{prodarr:data});
        }

    })
})

//display form for adding a new product in the database
router.get("/addproducts",function(req,resp){
    resp.render("add-emp")

})

//add new product into table
router.post("/insertproduct",function(req,resp){
    connection.query("insert into product values(?,?,?,?)",[req.body.pid,req.body.pname,req.body.qty,req.body.price],function(err,result){
        if(err){
            resp.status(500).send("error occurred")
        }else{
            if(result.affectedRows>0){
                resp.redirect("/products");
            }
        }
    })

})

//delete the product and go back to /products
router.get("/deleteproduct/:prodid",function(req,resp){
    connection.query("delete from product where pid=?",[req.params.prodid],function(err,result){
        if(err){
            resp.status(500).send("error occurred")
        }else{
            if(result.affectedRows>0){
                resp.redirect("/products");
            }
        }
    })

})



module.exports=router;