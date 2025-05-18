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




// More Array Methods(IMP)



// Map method


// Similar as forEach method.
// It returns new array.
// It creates a new array with the results of some operations. The value its callback returns are used to form new array.

// arr.map(callbackFnx(value, index, array))

// let newArr= arr.map((val)=>{
// return val*2;
// })

//How to use.

// let nums =[64,65,655];
// nums.map((val,idx,arr) => {
//     console.log(val,arr);
// })


// Creating new array using MAP function.(It doesnot change the original array)

// let nums=[456,65,565];
// let newArr=nums.map((val)=>{
//     return val+2;
// });
// console.log(newArr);

// forEach -- used for the normal calculation and printing
// map--  used for create a new array by using the original array 




// Filter Method

// Create a new array of the elements that give true for the condition.

//Qno.1 : All even elements from the array

// let arr=[1,2,34,6,7,8];
// let evenArr=arr.filter((val)=>{
//     return val %2 ===0; // for odd elements just use val%2 !==0;
// });
// console.log(evenArr);


// Reduce Method

// Performs some operations and reduces the array to a single value. It returns that single value.

//Qno.1 Sum of the array

// let arr=[1, 2, 3, 4];
// const output=arr.reduce((prev, curr)=> {   //prev-previous value, curr-currentvalue
// return prev+curr;
// });
// console.log(output);

//how it works: at 1st prev have=1,curr=2 then return prev+curr after the return the new value i.e 3(1+2), stores in the prev value which becomes prev=3,and curr=3 and so on.
//Output=10(1+2=3,3+3=6,6+4=10)


// Qno.2 Greater in the array

// let arr=[1, 2, 3, 4];
// const output=arr.reduce((prev, curr)=> {   //prev-previous value, curr-currentvalue
// return prev > curr ? prev : curr ;      //means: return the greater  of prev and curr — if prev is larger, return it; otherwise, return curr.
// });
// console.log(output);


// Qno.3  We are given of marks of students.Filter out the marks of the students that scored 90+.


// let marks=[56,88,98,89,91,90];
// let toppers=marks.filter((val)=>{
//     return val>=90;
// })
// console.log(toppers);



// Qno.4 Take a number n as input from user. Create an array of the numbers from 1 to n. Use the reduce method to calculate sum of all numbers in the array. Use the reduce method to calculate product of all the numbers in the array.


// let n= prompt("enter a number");
// let arr=[];
// for(let i=1; i<=n; i++){
//     arr[i-1] =i;
// }
// console.log(arr);

// let sum=arr.reduce((prev,curr)=>{
//     return prev+curr;
// });
// console.log("sum=",sum);

// let factorial=arr.reduce((prev,curr)=>{
//     return prev*curr;
// });
// console.log("factorial=",factorial);