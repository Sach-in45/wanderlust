const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const { validateReview } = require("../middleware.js")
const { isLoggedIn, isReviewOwner } = require("../middleware.js")
const reviewController = require("../controllers/reviews.js")

// =========================================

// Review - Create Route

router.post("/", 
    validateReview, 
    isLoggedIn,
    wrapAsync(reviewController.createReview));

    
// Review - Delete Route

router.delete("/:reviewId", 
    isLoggedIn, 
    isReviewOwner, 
    wrapAsync(reviewController.destroyReview));

module.exports = router;