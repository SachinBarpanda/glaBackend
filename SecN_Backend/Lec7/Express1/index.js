const express = require('express')
const app = express();


app.set('view engine','ejs');

app.use('/contact',(req,res)=>{
    res.send("<h1>hi this is a server</h1>")
})

app.get('/path',(req,res)=>{
    res.send("This is a get method")
})
app.get('/path/:user',(req,res)=>{
    const data = req.params
    res.send(data);
})

app.get('/product/',(req,res)=>{
    res.send(req.query);
})

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('*',(req,res)=>{
    res.send("404 NOT FOUND ")
})

app.listen(8080,()=>{
    console.log("Server started at 8080");
})