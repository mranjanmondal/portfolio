const express = require("express");
const app = express();
const path = require("path");
const nodemailer = require("nodemailer");
const bodyparser = require("body-parser")
app.set("view engine","ejs");
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.get("/",function(req,res){
    res.render("index")
})

app.post("/",function(req,res){
    let name = req.body.name;
    let email = req.body.email;
    let massage = req.body.massage;
    var transpoter = nodemailer.createTransport({
        service:'gmail',
        secure:true,
        auth:{
            user:'mondalanjan1211@gmail.com',
            pass:'dixu gigf jbwb lbhc'
        }
    })
    var mailOptions = {
        from:'mondalanjan1211@gmail.com',
        to:email,
        cc:'mondalanjan1211@gamil.com',
        subject:"thanks for giving feedback"+name,
        text:"thanks for your massage you have sent to us"+massage
    };
    transpoter.sendMail(mailOptions,function(error,info){
        if(error){
            console.log(error);
        }else{
            res.redirect("/")
            console.log(info.response)
        }
    })
})






app.listen(3000);