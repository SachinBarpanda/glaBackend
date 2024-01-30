const express = require('express')
const app = express();

app.set('view engine','ejs');


app.get('/product',(req,res)=>{
    console.log(req.query);
})


app.get('/page',(req,res)=>{
    res.render('./index')
})

app.listen(8080,()=>{
    console.log("port 8080 connected");
})