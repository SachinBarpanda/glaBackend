const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public")))

app.use(bodyParser.urlencoded({extended:true}))


app.get('/getkaPath',function(req,res){
    res.render('index')
    console.log("Get path hit");
    console.log((`${req.params}`));
    console.log((`${req.query.Apna}`));    
})

app.get('/postkaPath',function(req,res){
    res.render('index')
    console.log("Post path hit");
    console.log(req.body);
})

app.listen(8080,()=>{
    console.log("Server started at 8080");
})