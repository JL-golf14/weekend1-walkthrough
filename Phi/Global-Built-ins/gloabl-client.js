var someString = "87.9384 taco";
var someNumber = Number(-837764832);

console.log("someString:", someString);
console.log("someNumber:", someNumber);

var someFloat = parseFloat(someString);  // only goes until the first number stops with  a space
//must start with a number

console.log("someFloat: ", someString);


var someInt = parseInt(someString);
console.log("someInt: ", someInt);

var anotherString = String(someInt);
console.log(anotherString);
