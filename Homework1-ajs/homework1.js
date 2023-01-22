//## Task 1
//Write JS program which calculate sum 1+2+3+...n, where n is inputted by keyboard.

let inputNumber = prompt('Please enter a number:');
function sum (inputNumber){
    let sum = 0;
    let num = parseFloat(inputNumber);
    for (let i=1; i<num; i++) {
    sum += i;
    }
    return sum;
}
console.log(sum(inputNumber));

//Task 2
//Print all digits of a given number

const number = 123456;

function printDigits (num) {

    return Array.from(String(num), Number);

}

const digitsArray = printDigits(123456);

console.log(printDigits(number))


//Task 5
//Delete all elements of the array except the numbers

let array=[23, "Pinochio", null, "Trump", 689, 25, "Monika", 4, undefined, "FRIENDS"];
function deleteAllButNumbers(array) {
    let cleanArray = [];
    for (let item of array) {
        if (typeof(item) === "number") {
            cleanArray.push(item);
        }
    }
    
    return cleanArray;
} 

console.log(deleteAllButNumbers(array))
//deleteAllButNumbers(array);



//## Task 3
//Change the character (-) of the members of the array
let numArr = [4, -9, -98, -1, 444, 3, -555];

function convertToPositive (array) {
    let newArray = [];
    for (let item of array) {
        if (typeof(item) === "number") {
             positive = Math.abs(item)
            newArray.push(positive)
        }
    }
    return newArray;
}
//console.log(convertToPositive([4, -9, -98, -1, 444, 3, -555]));
console.log(convertToPositive(numArr));



//## Task 4
//Copy the odd elements from the given one into a new array. Print the new one in the console.
const givenArr = [12, 45, 88, 1, 567, 3, 91];

function oddElements (array) {
    let oddNumbers = [];
    for (let item of array) {
        if (item % 2 === 1) {
            oddNumbers.push(item)
        }
    }
    return oddNumbers;
}
console.log(oddElements(givenArr));