const express = require("express")
const mongoose = require("mongoose")
const PORT = 8000
let app = express()
const cors = require('cors')
app.use(cors())

const DB_URL = "mongodb+srv://suryakant:Atlas.1998@cluster0.hclmi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const connect = () => {
    return mongoose.connect(DB_URL)
}

const Books = require("./books.schema")

app.get("/books", async(req, res) => {
    let book = await Books.find({})
    res.status(200)
    res.json(book)
    console.log(book)
})

app.listen(PORT, async () => {
    try {
        await connect()
        console.log(`listening on Port ${PORT}`);
    }
    catch(e) {
        console.log(e.message)
    }
})