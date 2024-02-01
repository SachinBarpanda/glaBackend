const express = require('express')
const app = express();
const path = require('path')

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public/')))

app.get('/page',(req,res)=>{
    let pi = Math.PI;
    res.render('./index',{pi})
})

app.listen(8080,()=>{
    console.log("port 8080 connected");
})