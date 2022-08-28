

const express = require('express');
const router = express.Router();
// const BookModel = require("../models/userModel.js")
//const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!!")
}) 



 router.post("/createPublisher", BookController.createPublisher)
router.post("/createBook", BookController.createBook)
 router.post("/createAuthor", BookController.createAuthor)
 router.get("/getBooksWithAuthorDetails", BookController.getBooksWithAuthorDetails)

 
module.exports = router;









































































// const express = require('express');
// const router = express.Router();

// const authorController= require("../controllers/authorController")
// const bookController= require("../controllers/bookController")
// const publisherController = require("../controllers/publisherController")
// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createAuthor", authorController.createAuthor  )

// // router.get("/getAuthorsData", authorController.getAuthorsData)

// router.post("/createBook", bookController.createBook  )

// router.post("/createPublisher",publisherController.createPublisher)

// // router.get("/getBooksData", bookController.getBooksData)

// // router.get("/getBooksWithAuthorAndPubilsherDetails", bookController.getBooksWithAuthorAndPubilsherDetails)

// module.exports = router;