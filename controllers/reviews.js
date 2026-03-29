const Listing = require("../models/listing")
const Review = require("../models/review")

module.exports.createReview = async (req, res) => {
    let thisListing = await Listing.findById(req.params.id);

    if (!thisListing) {
        req.flash("error", "Listing not found!")
        throw new ExpressError(404, "Listing not found!");
    }

    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    thisListing.reviews.push(newReview);

    await newReview.save();
    await thisListing.save();
    req.flash("success", "Review created successfully")
    res.redirect(`/listings/${req.params.id}`);
}

module.exports.destroyReview = async (req, res) => {
    let { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    
    req.flash("success", "Review deleted successfully")
    res.redirect(`/listings/${id}`);
}