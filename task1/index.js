const express =require("express");
const bodyParser =require("body-parser") ;
const multer = require("multer");


const forms =multer ();
const app = express()
app.use( bodyParser.urlencoded({extended: true}))
app.use(forms.array());

app.get ("/", (_req, res) =>{
    
    res.end("welcome to home page") ;
})

app.post ("/user", (req, res) =>{
    
    res.json({
        error : 0 ,
        data_submitted :{
            body : req.body
        }
    })
    
})



app.get("/home" ,(_req, res) =>{
    res.json({
        userName : "marwaaljmaal" ,
        password : 12345
    }) ;
    
})




app.listen(8080, 'localhost', function(){
    console.log("server is up & running")
})