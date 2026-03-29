// State and Sessions
// session is nothing but 1 req-res cycle

const express = require("express");
const app = express()
const session = require("express-session")
const path = require("path")
const flash = require("connect-flash")

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOptions = {
    secret: "secretcode",
    resave: false,
    saveUninitialized: true
}
app.use(session(sessionOptions))
app.use(flash());

app.use((req, res, next) => {
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error")
    next()
})

app.get("/register", (req, res) => {
    let { name = "anonymous" } = req.query;
    req.session.name = name;

    if (name === "anonymous") {
        req.flash("error", "User not registered!")

    } else {
        req.flash("success", "User registered successfully!")
    }
    
    res.redirect("/home")
})

app.get("/home", (req, res) => {
    res.render(`page`, { name: req.session.name })
})

// ========================================
// app.get("/session", (req, res) => {  // How many time user hit website[sessions]
//     if (req.session.count) {
//         req.session.count++;
//     } else {
//         req.session.count = 1;
//     }
//     res.send(`${req.session.count}th Session started!`)
// })


app.listen(3000, () => {
    console.log("listening on 3000");
})