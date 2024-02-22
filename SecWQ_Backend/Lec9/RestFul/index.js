const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

app.use(methodOverride('_method'))

app.set('view engine', 'ejs')
app.set('views',path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'public')))

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

let articles = [
    {
        id:0,
        username:"One",
        comment : "One of man"
    },
    {
        id:1,
        username:"Two",
        comment : "Two of some"
    },
    {
        id:2,
        username:"Three",
        comment : "Three of much"
    },
    {
        id:4,
        username:"Four",
        comment : "Four of very"
    }

]

app.get('/',(req,res)=>{
    res.send("Happy to get")
})

app.get('/articles',(req,res)=>{
    res.render('index',{articles})
})

app.get('/article/new',(req,res)=>{
    res.render('new');
})

app.post('/articles',function(req,res){
    console.log(req.body);
    let {Name,article} = req.body;
    articles.push({id: Date.now() , username:Name, comment:article})
    res.redirect('/articles');
})

app.get('/articles/:id',function(req,res){
  const {id} = req.params;  
//   const foundComment = articles.find(function(item){
//     if(item.id === Number(id)){
//         return item;
//     }
//   })
  const foundComment = articles.map(function(foundComment){
    if(foundComment.id == Number(id)){
        // console.log(item);
        res.render('show',{foundComment});
        // return item;
    }
  })
  console.log(foundComment.id);
})

app.get('/articles/:id/edit',(req,res)=>{
    const {id} = req.params;
    const foundComment = articles.find(function(item){
        if(item.id === Number(id)){
            return item;
        }
    })
    res.render('edit',{foundComment});
})

app.patch('/articles/:id',(req,res)=>{
    let {id} = req.params;
    // console.log(id);
    const prevData = articles.find(function(item){
        if(item.id === Number(id)){
            return item;
        }
    })
    // console.log(req.body,foundComment);
    prevData.username = req.body.Name;
    prevData.comment = req.body.article;
    res.redirect('/articles');
})

app.delete('/articles/:id',(req,res)=>{
    let {id} = req.params;
    articles = articles.filter(function(item){
        return item.id !== Number(id);
    })
    res.redirect('/articles')
})


app.listen(8080,()=>{
    console.log("Running...");
})