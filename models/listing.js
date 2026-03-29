const mongoose = require("mongoose");
const Review = require("./review");

const listingSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    description: String,

    image: {
        filename: {
            type: String,
            default: "listingimage"
        },
        url: {
            type: String,
            default: "https://plus.unsplash.com/premium_photo-1771774994010-576337c0d143?w=600&auto=format&fit=crop&q=60"
        }
    },

    price: {
        type: Number,
        min: [1, "Too Low to Register on this Platform"]
    },

    location: String,

    country: String,

    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    geometry: {
        type: {
            type: String,
            enum: ["Point"]
        },
        coordinates: {
            type: [Number]
        }
    },
    category: {
  type: String,
  enum: [
    "Trending","Lake","Mountain","Beach","Forest","City","Snow",
    "Camping","Historical","Hotels","Food","Bridges","Island",
    "Temple","Nature","Hiking","Boating","Cycling","Relax",
    "Photography","Cafes"
  ]
}

});

// Cascade delete: when a listing is deleted, delete all its reviews too
listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await Review.deleteMany({ _id: { $in: listing.reviews } });
    }
});


const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
