const express = require('express')
const app = express()
const path = require('path')

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname,'public')))

app.get('/viewroute',(req,res)=>{
    res.render('index')
})

app.listen(8085,()=>{
    console.log("Port connected ");
})