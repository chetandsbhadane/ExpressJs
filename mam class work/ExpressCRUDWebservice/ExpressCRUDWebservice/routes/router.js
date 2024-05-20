const express=require("express");
const router=express.Router();
const connection=require("../db/dbconnection")

///to get all products
router.get("/products",function(req,resp){
    connection.query("select * from product",function(err,data,fields){
        if(err){
            resp.status(500).send("data not found")
        }else{
            resp.send(data);
        }

    })
})

//get product details of particular pid...
router.get("/products/product/:pid",function(req,resp){
    connection.query("select * from product where pid=?",[req.params.pid],function(err,data,fields){
        if(err){
            resp.status(500).send("data not found")
        }else{
            resp.send(data[0]);
        }

    })
})

//add data to database
router.post("/products/:id",function(req,resp){
    console.log(req.body);
    connection.query("insert into product values(?,?,?,?)",[req.body.pid,req.body.pname,req.body.qty,req.body.price],function(err,result){
        console.log("in post")
        console.log(req.body);
        if(err){
            resp.status(500).send("error occured")
        }else{
            if(result.affectedRows>0){
                resp.status(200).send("data added successfully")
            }
        }

    })

})

//delete the data from the database
router.delete("/products/:id",function(req,resp){
    connection.query("delete from product where pid=?",[req.params.id],function(err,result){
        if(err){
            resp.status(500).send("error occured")
        }else{
           
            if(result.affectedRows>0){
                resp.status(200).send("data deleted successfully")
            }
        }
    })
})

//update data
router.put("/products/:id",function(req,resp){
    connection.query("update product set pname=?,qty=?,price=? where pid=?",[req.body.pname,req.body.qty,req.body.price,req.body.pid],function(err,result){
        if(err){
            resp.status(500).send("error occured")
        }else{
            if(result.affectedRows>0){
                resp.status(200).send("data updated successfully")
            }
        }

    })

})

module.exports=router;