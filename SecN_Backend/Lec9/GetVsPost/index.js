const express = require('express')
const app = express();
const path =require('path')

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))

app.get('/getForm',(req,res)=>{
    res.render('index')
})

app.get('/newGet',(req,res)=>{
    res.send(req.query);
})
app.post('/newPost',(req,res)=>{
    res.send(req.body);

})



app.listen(8080,()=>{
    console.log("Server connected at 8080");
})