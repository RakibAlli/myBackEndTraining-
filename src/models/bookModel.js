const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName:{
        type:String,
        require:true
    },
    authorName:{
        type:String,
        require:true
    },
    category: String,
    
    publishedYear:Number

}, { timestamps: true });

module.exports = mongoose.model('bookDetail', bookSchema) //users



// String, Number
// Boolean, Object/json, array