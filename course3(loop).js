console.log("hello world");

//For loop

//eg. for(let i=1; i<=5; i++){ }

// for (count = 1; count <= 5; count++) {
//   console.log("abc");
// }
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Qn.1)   sum of number from 1 to 5

// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   sum = sum + i;
// }
// console.log("the total sum from 1 to 5 =", sum);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Qn.2)   sum of number from 1 to n

// let sum = 0;
// let n = prompt("enter the number");
// for (let i = 1; i <= n; i++) {
//   sum = sum + i;
// }
// console.log("the total number is", sum);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Infinite loops: A loops that never ends
// for (let 1=1; i>=0;i++){
// console.log("i=",i)}
//never runs the code ("CAN MAKE THE SYSTEM CRASH")

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// While loops

// let i=1;
// while(i<=5){
//     console.log("abc");
//     i++;
// }

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//do-while loop

// let i = 20;
// do {
//   console.log("abc");
//   i++;
// } while (i <= 10);

// let i = 1;
// do {
//   console.log("i=", i);
//   i++;
// } while (i <= 5);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// THERE ARE 2 DIFFERENT TYPES LOOP

//   1.For-of Loop

//for (let val of strVar){
//}

// let str = "abc";
// for (let i of str) {
//   console.log("i=", i);
// }

// let str = "Javascript";
// let size = 0;
// for (let val of str) {
//   console.log("val=", val);
//   size++;
// }
// console.log("string size=", size);  //Ans: 10

//2. For in Loop

// let student = {
//   name: "rahul",
//   age: 20,
//   cgpa: 7.8,
//   isPass: true,
// };
// for (let key in student) {
//   console.log("key=", key, "value=", student[key]);
// }

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------


//PRACTICE QN

//1. Print all the even number from 0 to 100.