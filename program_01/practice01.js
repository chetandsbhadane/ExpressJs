const express = require('express');
const app = express();

app.use('/',function(req,res){
    res.send('<h2>Hello My Name is Chetan</h2><br><h3>This is my first express.js program!</h3>');
})

app.listen(3001,function(){
    console.log('Server is running on 3001');
})