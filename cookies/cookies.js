const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")

app.use(cookieParser("secreatecode"))

// app.get("/", (req, res)=>{
//     res.send("Home Route")
// })

// app.get("/cookie", (req, res)=>{
//     res.cookie("Key", "Value")
//     res.cookie("name", "Vishnuu", {signed: true})
//     res.send("Cokkie Page!")
// })

// app.get("/verify", (req, res) => {
//    console.log(req.cookies);
//    console.log(req.signedCookies);
//     res.send(`Done`)
// })

app.listen(3000, (req, res) => {
    console.log(`running on port 3000`);
})