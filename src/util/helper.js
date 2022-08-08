function printDate() {
    const d=new Date().getDate();
    // const d= Date.now().getDate()
    console.log("today date is :"+d);
}


function printMonth() {
    // const a=new Date().getMonth();
    // console.log(a);
   let date = new Date().getMonth()+1;
   console.log("this is current month:"+date);
}
//   let month = new Date().getDate();
//   let year = new Date().getFullYear();
//   console.log(`today date is ${date}/${month}/${year}`)
// const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];


// let month = months[new Date().getMonth()];
// let date = new Date().getDate();
//   let year = new Date().getFullYear();
//   console.log(`today date is ${date}/${month}/${year}`)



function getBatchInfo() {
    console.log("plutonium, W2D5, the topic for today is Nodejs module system");
}

module.exports.printDate=printDate;
module.exports.printMonth=printMonth;
module.exports.getBatchInfo=getBatchInfo;