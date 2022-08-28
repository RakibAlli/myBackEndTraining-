
const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel = require("../models/authorModel")
const PublisherModel= require("../models/publisherModel")



const createAuthor= async function (req, res) {
   let data= req.body
   let authorData= await AuthorModel.create(data)
   res.send({msg: authorData})
}

const createPublisher= async function (req, res) {
   let data= req.body
   let PublisherData= await PublisherModel.create(data)
   res.send({msg: PublisherData})

}
const createBook= async function (req, res) {

   // FOR AUTHOR

   let book = req.body
   let authorId = req.body.authorId
   let publisherId = req.body.publisherId

   if(!authorId){
       res.send({Error: "Please enter author Id"})
   }

const authorInfo= await AuthorModel.findById(authorId)
   if (!authorInfo){
        res.send({Error: "Please enter a valid Author ID"})
   }

   //FOR PUBLISHER

   if(!publisherId){
       res.send({Error: "Please enter publisher ID"})
   }
const publisherInfo = await PublisherModel.findById(publisherId)
   if(!publisherInfo){
       res.send({Error: "Please enter a valid publisher ID"})
   }
let bookCreated = await BookModel.create(book)
res.send({data: bookCreated})



}


const getBooksWithAuthorDetails = async function (req, res) {
   let specificBook = await BookModel.find().populate('author').populate('publisher')
   res.send({data: specificBook})

}



module.exports.createAuthor= createAuthor
module.exports.createPublisher= createPublisher
module.exports.createBook= createBook
module.exports.getBooksWithAuthorDetails= getBooksWithAuthorDetails














































































































// const authorModel = require("../models/authorModel")
// const bookModel = require("../models/bookModel")

// const createBook = async function (req, res) {
//     let book = req.body
//     let bookCreated = await bookModel.create(book)
//     re.send({ data: bookCreated })
// }

// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }

// const getBooksWithAuthorAndPubilsherDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('Author', 'Publisher')
//     res.send({ data: specificBook })

// }

// module.exports.createBook = createBook
// module.exports.getBooksData= getBooksData
// module.exports.getBooksWithAuthorAndPubilsherDetails = getBooksWithAuthorAndPubilsherDetails
