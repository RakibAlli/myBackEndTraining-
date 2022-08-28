const express = require('express');
const router = express.Router();
const bookModel= require("../models/bookModel.js")
const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("connected successfull!")
})

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBookData)

module.exports = router;