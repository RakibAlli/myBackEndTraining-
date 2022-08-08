const express = require('express');
// const abc = require('../introduction/intro')
const router = express.Router();

// router.get('/test-me', function (req, res) {
//     console.log('My batch is', abc.name)
//     abc.printName()
//     logger.welcome()

//     res.send('My second ever api!')
// });






router.get('/movie', function (req, res){
    let movie = ["Rang de basanti", "The shining," ,"Lord of the rings", "Batman begins"]
    res.send(movie)
})




router.get('/movie/:index',function(req,res) {
  
    let movie = ["Rang de basanti", "The shining," ,"Lord of the rings", "Batman begins"]
    
    console.log("movie name is "+movie[req.params.index]);
    res.send(movie[req.params.index])
   
})



router.get('/movie/:index',function(req,res) {
  
    let movie = ["Rang de basanti", "The shining," ,"Lord of the rings", "Batman begins"]

    if (req.params.index<movie.length) {
        console.log("movie name is "+movie[req.params.index])
    } else {
        console.log("please enter valid index value"+(movie[req.params.index] =" "));
    }
})


router.get('/films',function(req,res){
    let arrayObj=[ {"id": 1,"name":"The Shining"}, {"id": 2,"name": "Incendies"}, {"id": 3, "name": "Rang de Basanti" }, {"id": 4,"name": "Finding Nemo" }]

console.log(arrayObj)
res.send(arrayObj)

})

router.get('/films/:filmId',function(req, res){
    let arrayObj=[ {"id": 1,"name":"The Shining"}, {"id": 2,"name": "Incendies"}, {"id": 3, "name": "Rang de Basanti" }, {"id": 4,"name": "Finding Nemo" }]

if (req.params.filmId<=arrayObj.length) {
    console.log("movie name is "+arrayObj[req.params.filmId]);
} else {
    console.log("no movie exsit with this Id "+(arrayObj[req.params.filmId] =" "));
}
res.send(arrayObj[req.params.filmId]);
});







module.exports = router;











































// router.get('/movie/:index', function(req, res){
//     /*
//     params is an attribute inside request that contains 
//     dynamic values.
//     This value comes from the request url in the form of an 
//     object where key is the variable defined in code 
//     and value is what is sent in the request
//     */
//     // let movie1= ["Rang de basanti", "The shining," ,"Lord of the rings", "Batman begins"]
//     let requestParams = req.params

//     // JSON strigify function helps to print an entire object
//     // We can use any ways to print an object in Javascript, JSON stringify is one of them
//     console.log("This is the request "+ JSON.stringify(requestParams))
//     let movie = requestParams.name
//     console.log('Name of the student is ', movie)
    
//     res.send('Dummy response')
// })

