/////////////////////////
// old school function
////////////////////////
function sayHello(){
    console.log("hello");
}

///////////////////
// arrow function
///////////////////
const sayHi = () =>{
    console.log("hi");
}
sayHello()

///////////////////////
// old school still
///////////////////////
function sayWassup(name){
    console.log('Hello, ${name}');
}
sayWassup("Rosei");
sayWassup("Ethan");
sayWassup("Pedro");

//////////////////////////
// prints sum of 10 + 10
/////////////////////////
const printSum = (num1, num2) => {
    console.log(num1+num2);
}
printSum(10, 10);

/////////////////////////////////////////////
// if 4 is even, console log number is even
////////////////////////////////////////////
function isEven(num){
    return num % 2 === 0;
}
if(isEven(4)){
    console.log("This number is even");
}

///////////////////////////////////////
// Will let you know if it is divisible
///////////////////////////////////////
function isDivisible(num1, num2){
    return num1 % num2 === 0;
}
if(isDivisible(15, 5)){
    console.log("The numbers are divisible");
}

////////////////////////////////
// Write a function makeSentence that takes three parameters and
// concatenates them into a fully formed sentence.
///////////////////////////////
  function makeSentence (parameter1, parameter2, parameter3){
    console.log(parameter1 + parameter2 + parameter3);
}
makeSentence("This", " is a ", "sentence.");

////////////////////////////////////////////////////
//printLastElement accepts an array as input and 
//console.log whatever the last element in the array is 
////////////////////////////////////////////////////////
const printLastElement = (arr) => {
    console.log(arr[arr.length-1]);
};
printLastElement(['first', 'second', 'third']);
//////////////////////////////////////////////////
const lastLetter = getLastElement = (arr) => {
    return arr[arr.length -1]
}
console.log(getLastElement(["a", "b", "c"]))

/////////////////////////////////////
// Write a function that takes two parameters (strings) and returns true 
// (Boolean) if the two strings are identical, false if not.
///////////////////////////////////
 function identical(string1, string2){
     if(string1 === string2){
         return("true")
     } else {
         return("false")
     }
 }
 console.log((identical)("testing", "testing2"))
/////////////////////////////////////////////////
const identical = (string1, string2) => {
    if(string1 === string2){
        return true;
    } else {
        return false;
    }
}
console.log(identical("a", "a"));

////////////////////////////////////////////////////////
// Write a function that takes three parameters (numbers), sums them, 
//converts the sum into a string and returns the string (eg. "123") _ 
//Use your google-fu to research converting a number into a string _ 
// Invoke the function a couple of times with different arguments each time
///////////////////////////////////////////////////////

const turnSumOfThreeIntoString = (num1, num2, num3) => {
    const sum = num1 + num2 + num3;
    return sum.toString();
}
    console.log(typeof turnSumOfThreeIntoString(1,2,3))

////////////////////////////////
// THIS IS THE MORNING LAB
//////////////////////////////
// Write a function called printGreeting with a parameter 
// name that returns a greeting with the argument interpolated into the greeting.
/////////////////////////////////////////

function printGreeting(name){
    let returnValue = 'Hello there,' + name;
    // let returnValue = 'Hello there, ${name}'; // interpolated version WHY ISNT IT WORKING??
    return returnValue
}
printGreeting("Alicia");
console.log(printGreeting("Alicia"));



///////////////////////////////////////////////
// Write a function reverseWordOrder that accepts a single argument, 
// a string. The function should return a string with the order of the 
// words reversed. Don't worry about punctuation.
///////////////////////////////////////////////////

function reverseWordOrder(string){
    
}
