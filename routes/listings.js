const express = require("express");
const router = express.Router({ mergeParams: true });

const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js")

const { isLoggedIn, isOwner, validateListing } = require("../middleware.js")
const listingController = require("../controllers/listings.js")

const multer = require("multer")
const { storage } = require("../cloudConfig.js")
const upload = multer({ storage })

// =================


router.route("/")
    .get(wrapAsync(listingController.index))
    .post(
        isLoggedIn,
        upload.single("listing[image]"),
        validateListing,
        wrapAsync(listingController.createListing))


// =================
// New Route

router.get("/new",
    isLoggedIn,
    listingController.renderNewForm);

// =================

router.route("/:id")
    .put(
        isLoggedIn,
        isOwner,
        upload.single("listing[image]"),
        validateListing,
        wrapAsync(listingController.updateListing))

    .delete(
        isLoggedIn,
        isOwner,
        wrapAsync(listingController.destroyListing))


    .get(
        wrapAsync(listingController.showListing))

// ------------------------------
// Edit Route

router.get("/:id/edit",
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.renderEditListingForm));


// ------------------------------
module.exports = router;