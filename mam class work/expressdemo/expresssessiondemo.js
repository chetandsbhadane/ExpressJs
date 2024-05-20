const express=require("express");
const session=require("express-session")
const app=express();

//setup the session
app.use(session({
    secret:"mysecretkey",
    resave:true,
    saveUninitialized:true
}))

app.get("/validate-user",function(req,resp){
    //set values to the session
     req.session.uname="user1";
     req.session.role="admin";
     resp.send("<h2>valid user</h2><a href='getsession'>getSession</a>")
})

app.get("/getsession",function(req,resp){
    //get the values from the session
    var name=req.session.uname;
    var role= req.session.role;
    resp.send("Your name is :"+name+"  your role is : "+role);
})
app.get("/logout",function(req,resp){
    //get the values from the session
   req.session.destroy(function(error){
    console.log("session destroyed")
   })
    resp.send("Your name is :"+name+"  your role is : "+role);
})
app.listen(3001,function(){
    console.log("server running at port 3001")
})