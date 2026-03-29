const User = require("../models/user.js")

module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs")
}

module.exports.signup = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ username, email })
        const registerdUser = await User.register(newUser, password)

        // Login after signup automatically
        req.login(registerdUser, (err) => {
            if (err) {
                return next(err)
            }
            req.flash("success", "Welcome to wonderlust!")
            res.redirect("/listings")
        })
    }
    catch (err) {
        req.flash("error", err.message)
        res.redirect("/signup")
    }
}

module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs")
}

module.exports.login = async (req, res) => {
    req.flash("success", "Welcomeback to Wonderlust!")
    let redirectUrl = res.locals.redirectUrl || "/listings"
    res.redirect(redirectUrl)
}

module.exports.logout = (req, res) => {
    req.logOut((err) => {
        if (err) {
            return next(err)
        }
        req.flash("success", "Logout successful!")
        res.redirect("/listings")
    })
}