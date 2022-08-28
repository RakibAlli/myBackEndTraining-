const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel = require("../models/authorModel")

const createBook= async function (req, res) {
    let data= req.body
    let booksData= await BookModel.create(data)
    res.send({msg: booksData})
}


const createAuthor= async function (req, res) {
    let data= req.body
    let authorData= await AuthorModel.create(data)
    res.send({msg: authorData})
}


const bookByCb= async function(req, res){
    let booksOfCb = await AuthorModel.find({author_name: "Chetan Bhagat"}).select("author_id")
    let finalData = await BookModel.find({author_id:booksOfCb[0].author_id})
    res.send({msg: finalData})
}


const getAuthorOfTs = async function (req, res) {
    let authorOfTs = await BookModel.findOneAndUpdate({name:"Two states"},{$set: {price: 100}},{new:true})
    let finalData = await AuthorModel.find({author_id:authorOfTs.author_id}).select("author_name")
    let prices = authorOfTs.price
    res.send({msg: finalData,prices})
}


const getInclCost = async function (req, res) {
    let inclusiveCost = await BookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})
    let allAuthorNames = await AuthorModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})
    res.send({msg:inclusiveCost,allAuthorNames })
}

module.exports.createBook= createBook
module.exports.createAuthor= createAuthor
module.exports.bookByCb= bookByCb
module.exports.getAuthorOfTs = getAuthorOfTs
module.exports.getInclCost = getInclCost
