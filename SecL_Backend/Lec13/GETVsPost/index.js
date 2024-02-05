const express = require('express')
const app = express()
const path = require('path')


app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded());

app.get('/getkaMethod',(req,res)=>{
    res.render('index');
})

app.get('/newGet',(req,res)=>{
    res.send(req.query);
})

app.post('/posterMan',(req,res)=>{
    // console.log(req.body);
    res.send(req.body);
})


app.listen(8080,()=>{
    console.log("Server opened at 8080");
})
