console.log("Hello\nWorld");

// Function in JS

// Block of code that performs a specifics task, can be invoked whenever needed.

// Function Defination(syntax)

// Function functionName(){
//do some work
//}


// function functionName(parameter1, parameter2,....){
// do some work
//}



// Function Call
//(for printing)
// functionName();




// Example

// function myFunction (){          //Defining function
//     console.log("abcd");
//     console.log("learning JS");
// }
// myFunction();                    // Calling function


// Sum of two value.


// function num() {
//   let a = prompt("Enter 1st number");
//   let b = prompt("Enter 2nd number");
  
//   // Convert inputs to numbers
//   let sum = Number(a) + Number(b);
  
//   return sum;
// }

// let result = num();
// console.log("Sum:", result);



// Arrow Function   "=>" compact way of writing function.



// const functionName=(parameter1, parameter2...) =>{
    // do some work
    //}

//example

//const sum(a,b) =>{
    //return a+b:
    //}

// Practice Qn.

// Qno 1.

// Create a function using the "function"keyword that takes a string as an argument and returns the number of vowels in the string.


// function countVowels(str) {
//     let count=0;
//   for (const char of str) {
//     if (
//         char === "a" || 
//         char === "e" ||
//         char === "i" ||
//         char === "o" ||
//         char === "u" 
//     )   {
//         count++;
//     }
// }
//     console.log(count);
//   }




// Qn no 2.
// Create an arrow function to perform the same task.

// const countVow = (str) => { 
//     let count=0;
//   for (const char of str) {
//     if (
//         char === "a" || 
//         char === "e" ||
//         char === "i" ||
//         char === "o" ||
//         char === "u" 
//     )   {
//         count++;
//     }
// }
//     console.log(count);
  
// } 



// ForEach Loop in Function  (ForEach is a Higher Order Function/Order).


// arr.forEach(callBackFunction)

//callbackFunction: Here, it is a function as an argument to another function. * A callback is a function passed as an argument to another function


// arr.forEach((val)=> {
    //console.log(val);
    //})


// function abc(){
//     console.log("hello");
// }
// function myFunc(abc){
//     return abc;
// }


// let arr=[1,2,3,4,5];
// arr.forEach(function printVal(val){
// console.log(val);
// })   

//Complex to understand for easy way we can use [Arrow Function].

// let arr=[1,2,3,4,5];
// arr.forEach((val)=>{
// console.log(val);
// })


//use of toUpperCase


// let arr1=["abc","def","ghi","ijk"];
// arr1.forEach((val)=>{
// console.log(val.toUpperCase());   // toUpperCase---for making the string in uppercase.
// })




// CallBack function have 3 parameters(Opitional)

// 1. value
// 2. index--idx (position)
// 3. array--arr (array itself)

// Use of idx

// let arr1=["abc","def","ghi","ijk"];
// arr1.forEach((val, idx)=>{
// console.log(val, idx);   // idx---for giving the position of the array value.
// })

// let arr=["abc","def","ghi","ijk"];
// arr.forEach((val,idx, arr)=>{ //idx is used for allocate the array .
// console.log(val,arr);   // arr---for showing the array value.
// })


// (Value, index, array)---correct way of placing the parameter 
// If we don't want using index but still want to get the array parameter use:

// let arr=["abc","def","ghi","ijk"];
// arr.forEach((val,_, arr)=>{ // Use "_"placeholder for index (you don’t need it, but must include it
// console.log(val,arr);   // arr---for showing the array value.
// })



// Practic Qn.

//Qno.1
// For a given array of numbers, print the square of each value using the forEach loop

// let nums=[134,235,357,433];

// nums.forEach((nums)=>{
//     console.log(nums*nums);
// });
