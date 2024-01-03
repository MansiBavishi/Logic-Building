const express = require("express")
const path = require("path")
const fs = require("fs")
const https = require("https")
const jwt = require("jsonwebtoken")
const jwt_secret = "secretkey";
const app = express()

const veriftToken = (req,res,next)=>{
    const token = req.header("auth-token")
    if(!token){
        return res.status(401).json({message :"token not found"})
    }

    try {
        const decode = jwt.verify(token,jwt_secret)
        req.user = decode
        next()
    } catch (error) {
        return res.status(401).json({message :"Invalid Token"})
    }    
}
app.get("/",(req,res)=>{
    res.send("Hello")
})

app.get("/about",(req,res)=>{
    res.send("About")
})

const user = {
    userid: 123,
    email: "abc@inventyv.com"
}

app.get("/Orders",veriftToken,(req,res)=>{
    res.send("Orders Page")
})

app.get("/login",(req,res)=>{
    
    const token = jwt.sign(user, jwt_secret,{expiresIn : '5s'})
    console.log(token);
    
    if(token) {
        res.json({token});
    }
})


var key = fs.readFileSync(path.join(__dirname,"server.key"))
var crt = fs.readFileSync(path.join(__dirname,"server.crt"))


const creds = {
    key : key,
    cert : crt
}

const server = https.createServer(creds,app)

server.listen(3000,()=>{
    console.log("Listening on 3000");
})