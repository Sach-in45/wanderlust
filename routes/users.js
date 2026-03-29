const express = require("express")
const router = express.Router({ mergeParams: true })

const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const local = require("passport-local");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js")

// ======================================
// signup[ create new user ]

router.route("/signup")
    .get(userController.renderSignupForm)
    .post(wrapAsync(userController.signup))

// =======================================
// login[ authenticate user ]

router.route("/login")
    .get(userController.renderLoginForm)
    .post(saveRedirectUrl,
        passport.authenticate("local",
            {
                failureRedirect: "/login",
                failureFlash: true
            }),
        userController.login)

// =======================================
// logout[ authenticate user ]

router.get("/logout", userController.logout)

module.exports = router;