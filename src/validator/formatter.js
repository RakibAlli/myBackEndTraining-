function trim() {
    const name="  rakib  alli  ";
    console.log(name.trim());
}

function changetoLowerCase() {
    const myName="Rakib Alli"
    const lowerCase=myName.toLowerCase();
    console.log(lowerCase);
}
function changetoUpperCase() {
    const myName="rakib alli"
    const upperCase=myName.toUpperCase();
    console.log(upperCase);
}
module.exports = { trim,changetoLowerCase,changetoUpperCase };
// module.exports.changetoLowerCase=changetoLowerCase;
// module.exports.changetoUpperCase=changetoUpperCase;