const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")

app.use(cookieParser("secreatecode"))

app.get("/login", (req, res)=>{
    res.cookie("user", "sachin", {signed: true})
    res.redirect("/profile")
})

app.get("/profile", (req, res)=>{
    let {user} = req.signedCookies;
    if(user){
        res.send(`Welcome ${user}`)
    }else{
        res.send("Not logged in")
    }
})

app.get("/logout", (req, res) =>{
    res.clearCookie("user", { path: "/"})
    res.send("logout Successful")
})
app.listen(3000, ()=>{
    console.log("Runing on 3000");
})