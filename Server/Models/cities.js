const mongoose = require("mongoose");

let citiesSchema = new mongoose.Schema(
    {
        "name": String,
        "location ": String,
    }, { versionKey: false }
)
module.exports = mongoose.model('cities', citiesSchema);


