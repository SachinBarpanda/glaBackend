const express = require('express')
const app = express();
const path = require('path')

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))

const articles = [
    {
        id:Date.now(),
        username: "Deepak",
        article: "Ram Ram Bhaiyon"
    },
    {
        id:Date.now(),
        username: "Rahul",
        article: "Elvis bhai ke aage"
    },
    {
        id:Date.now(),
        username: "Bhanu P",
        article: "Kya Muskan Hai"
    },
    {
        id:Date.now(),
        username: "Nikhil K",
        article: "Mein Jinda hun"
    },
    {
        id:Date.now(),
        username: "Prabal",
        article: "Aloo dunga SOna Niklega "
    },
]

app.get('/articles',(req,res)=>{
    res.render('index',{articles})
})

app.get('article/new',(req,res)=>{
    res.render('new');
})
app.post('articles',(req,res)=>{
    const {username,article} = req.body;
})

app.listen(8080,(req,res)=>{
    console.log("Port connected at 8080");
})