const Listing = require("../models/listing")
const ExpressError = require("../utils/ExpressError.js")
const axios = require("axios");

module.exports.index = async (req, res) => {
    const { category, search } = req.query;

    let query = {};

    if (category) {
        query.category = category;
    }

    if (search) {
        query.$or = [
            { title: { $regex: search, $options: "i" } },
            { location: { $regex: search, $options: "i" } },
            { country: { $regex: search, $options: "i" } },
        ];
    }

    const allListings = await Listing.find(query);
    res.render("./listings/index.ejs", { allListings, category, searchQuery: search || "" });
}

module.exports.renderNewForm = (req, res) => {
    res.render("./listings/new.ejs");
}

module.exports.createListing = async (req, res) => {
    let url = req.file.path;
    let filename = req.file.filename;

    let newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };

    let location = req.body.listing.location;

    let response = await axios.get("https://nominatim.openstreetmap.org/search", {
        params: {
            q: location,
            format: "json",
            limit: 1
        },
        headers: {
            "User-Agent": "wanderlust-app"
        }
    });

    let data = response.data[0];

    if (!data) {
        req.flash("error", "Location not found");
        return res.redirect("/listings/new");
    }

    newListing.geometry = {
        type: "Point",
        coordinates: [parseFloat(data.lon), parseFloat(data.lat)]
    };

    await newListing.save();

    req.flash("success", "New Listing Created!");
    res.redirect(`/listings/${newListing._id}`);
};

module.exports.renderEditListingForm = async (req, res) => {
    let { id } = req.params;
    let thisListing = await Listing.findById(id);
    if (!thisListing) {
        req.flash("error", "Listing not found!")
        throw new ExpressError(404, "Listing not found!");
    }

    let originalImageUrl = thisListing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_220")

    res.render("./listings/edit.ejs", { thisListing, originalImageUrl });
}

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;

    let thisListing = await Listing.findByIdAndUpdate(
        id,
        req.body.listing,
        { runValidators: true, new: true }
    );

    if (!thisListing) {
        req.flash("error", "Listing not found!");
        throw new ExpressError(404, "Listing not found!");
    }

    if (req.file) {
        thisListing.image = {
            url: req.file.path,
            filename: req.file.filename
        };
        await thisListing.save();
    }

    req.flash("success", "Listing updated successfully!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "  Listing Deleted!")
    res.redirect("/listings");
}

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    let thisListing = await Listing.findById(id)
        .populate({ path: "reviews", populate: { path: "author" } })
        .populate("owner");
    if (!thisListing) {
        req.flash("error", "Listing not found!")
        return res.redirect("/listings")
    }
    res.render("./listings/show.ejs", { thisListing });
}