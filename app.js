import express, { Router } from "express";
import bodyParser from "body-parser";

const app=express();

const items=["Buy Food","Cook Food","Eat Food"];
const workitems=[];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    var today=new Date();
        
var options={
    weekday:"long",
    day:"numeric",
    month:"long"
};

var day=today.toLocaleDateString("en-US",options);  
    res.render("lists",{listTitle: day,newlistitems: items});
});


app.post("/", function(req,res){
    const item=req.body.newItem;

    if(req.body.list==="Work"){
        workitems.push(item);
        res.redirect("/work");
    }
    else{
    items.push(item);
    res.redirect("/");
    }

    
});


app.get("/work",function(req,res){
    res.render("lists",{listTitle:"Work List",newlistitems: workitems});
});


// app.post("/work",function(req,res){
//   let item=req.body.newItem;
//   workitems.push(item);
//   res.redirect("/work");
// });


app.listen(3000,function(){
    console.log("server is started at 3000");
 });



