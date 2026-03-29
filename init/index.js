const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

mongoose.connect("mongodb://127.0.0.1:27017/wanderlust")
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map( (obj) => ({...obj, owner: '69c4c82a480f2990e910f729'}))
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
    mongoose.connection.close();
};

initDB();
