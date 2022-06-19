const mongoose = require("mongoose");


const authorSchema = mongoose.Schema({
    name: String,
    info: String,
})

const Author = mongoose.model("author", authorSchema);

module.exports = Author