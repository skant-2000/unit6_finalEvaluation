const mongoose = require("mongoose")


const booksSchema = new mongoose.Schema({
    title: String,
    author: String,
    img: String,
})

const booksModel = mongoose.model("books", booksSchema)

module.exports = booksModel;

