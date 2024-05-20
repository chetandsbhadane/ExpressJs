const mysql = require('mysql');

var conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'mysql',
    database:'express',
    port:3306
})

conn.connect((err)=>{
    if(!err){
        console.log("connection done");
    }else{
        console.log("connection failed" + err.stack);
    }

})

module.exports=conn;
