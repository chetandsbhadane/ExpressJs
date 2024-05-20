const express=require("express");
const router=express.Router();
const connection=require("../db/myConn");
var queries = require("../queries/queries");

///to get all products
router.get("/products",function(req,resp){
    connection.query(queries.getAllDataQuery(),function(err,data,fields){
        if(err){
            resp.status(500).send("data not found");
        }else{
            resp.send(data);
        }

    })
})
//to get product for particular product.
router.get("/products/product/:pid",function(req,resp){
    connection.query(queries.getByPidQuery(),[req.params.pid],function(err,data,fields){
        if(err){
            resp.status(500).send("data not found")
        }
        else{
            resp.send(data[0]);
        }
    })
})

//post method to insert data to table
router.post("/products/:pid",function(req,resp){
    connection.query(queries.postQuery(),[req.body.pid,req.body.pname,req.body.qty,req.body.price],function(err,result){
        if(err){
            resp.status(500).send("error occured")
        }else{
            console.log(result)
            if(result.affectedRows>0){
                resp.status(200).send("data added successfully")
            }
        }
    })
})

//delete
router.delete("/products/:pid",function(req,resp){
    connection.query(queries.deleteQuery(),[req.params.pid],function(err,result){
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
    connection.query(queries.putQuery(),[req.body.pname,req.body.qty,req.body.price,req.body.pid],function(err,result){
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