const express = require('express');
const lodash=require('lodash')
const welcome=require('../logger/logger');
const calender=require('../util/helper');
const string=require('../validator/formatter');
// const allMonth=require('../moduleProblem/module');
const router = express.Router();

router.get('/test-me', function (req, res) {
 
    let allMonth=["jan","feb","mar","apr","may","jun","july","aug","sept","oct","nov","dec"];

    console.log(lodash.chunk(allMonth,4));
    
    let oddNumber =[1,3,5,7,9,11,13,15,17,19];
     console.log(lodash.tail(oddNumber));
    
    
    let arr1=[1];
    let arr2=[1,2];
    let arr3=[1,2,3];
    let arr4=[1,2,3,4];
    let arr5=[1,2,3,4,5]
     
    let combineArray=lodash.union(arr1,arr2,arr3,arr4,arr5)
      
       console.log(combineArray);
    
    let Array=[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    
    console.log(lodash.fromPairs(Array));



 welcome.welcome();
calender.printDate();
calender.printMonth();
calender.getBatchInfo();
string.trim();
string.changetoLowerCase();
string.changetoUpperCase();
//  allMonth.moduleAllmonth();


res.send('Welcome to my application. I am rakib and a part of FunctionUp Plutonium cohort')
});




module.exports = router;
// adding this comment for no reason