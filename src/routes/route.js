const express = require('express');
const welcome=require('../logger/logger');
const calender=require('../util/helper');
const string=require('../validator/formatter');

const router = express.Router();

welcome.welcome();
calender.printDate();
calender.printMonth();
calender.getBatchInfo();
string.trim();
string.changetoLowerCase();
string.changetoUpperCase();







router.get('/test-me', function (req, res) {
    
    res.send('Welcome to my application. I am rakib and a part of FunctionUp Plutonium cohort')
});



module.exports = router;
// adding this comment for no reason