// Make 2 functions:


// Function that takes a number through a parameter and returns if its even or odd
// Function that takes a number through a parameter and returns if its positive or negative
// Create a function that takes a number through a parameter and calls all three functions for the number that was passed. It should show the results in the console.

function oddEven (number) {
    if(number % 2 === 0) {
        return "even";
    } 
   
        return "odd";
    
} 


console.log("This number is ", oddEven(256));
console.log("This number is ", oddEven(5));
console.log("This number is ", oddEven(86));
console.log("This number is ", oddEven(10));
console.log("This number is ", oddEven(13));
console.log("-------------");
function positiveNegativ (number) {
    if(number <= 0) {
        return "negative";
    } 
   
        return "positive";
    
} 
console.log("This number is ", positiveNegativ(-56));
console.log("This number is ", positiveNegativ(23));
console.log("-------------");

function result (func1, func2, number){
    return func1(number) + " and " + func2(number)
    
}

let res = result(oddEven, positiveNegativ, -26);
let res2 = result(oddEven, positiveNegativ, 100);
let res3 = result(oddEven, positiveNegativ, 33);
console.log(`This number is:`, res);
console.log(`This number is:`, res2);
console.log(`This number is:`, res3);
