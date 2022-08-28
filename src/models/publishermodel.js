const mongoose =require('mongoose')
 
const publisherSchema= new mongoose.Schema({
    name: {
    type:String,
    required:true,
    },
headQuarter: String

},{timeStamp:true})

module.exports =mongoose.model('Publisher',publisherSchema)