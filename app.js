if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
}
const dbUrl = process.env.ATLASDB_URL;

const express = require("express");
const app = express();

const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash")

const passport = require("passport")
const LocalStrategy = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose").default;

const multer = require("multer")
const { storage } = require("./cloudConfig.js")
const upload = multer({ dest: "uploads/"})

const listingRouter = require("./routes/listings.js")
const reviewRouter = require("./routes/reviews.js")
const userRouter = require("./routes/users.js")

const User = require("./models/user.js")

// ========================================================

const MongoStore = require("connect-mongo");

const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 3600,
});

store.on("error", (err) => {
    console.log("Error in MONGO SESSION STORE", err);
})

const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {  // cookie timelimit
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    }
}
// ========================================================
// Middleware setup

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ========================================================

app.use((req, res, next) => {
    res.locals.success = req.flash("success")
    res.locals.error = req.flash("error")
    res.locals.currentUser = req.user;
    next();
})

// Routes

app.use("/listings", listingRouter)
app.use("/listings/:id/reviews", reviewRouter)
app.use("/", userRouter)


// ========================================================
// 404 & Error handlers

app.use((req, res, next) => {
    next(new ExpressError(404, "Page not found!"));
});

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong!" } = err;
    res.status(statusCode).render("listings/error.ejs", { err });
});


// ========================================================
// Database and server

const port = 8080;
mongoose.connect(dbUrl)
    .then(() => {
        console.log("Connected to DB");
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    })
    .catch((err) => {
        console.log("Failed to connect to DB");
        console.log(err);
    });
