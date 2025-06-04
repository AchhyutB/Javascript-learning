// What this chapter is about?
// async await >> promise chains >> callback hell

// function hello(){
//     console.log("hello");
// }
// setTimeout(hello,2000)  // 2s=2000ms

// instead of this we can use arrow function

// setTimeout(()=>{
//     console.log("hello")
// },2000);

//THIS IS ASYNCHRONOUS PROGRAM

// console.log("one");
// console.log("two");
// console.log("three");
// setTimeout(()=>{
// console.log("hello")
// },2000)
// console.log("four");



// CALLBACK FUNCTION


// function sum(a,b){
//     console.log(a+b);
// }
// function calculator (a,b,sumCallback){
//     sumCallback(a,b);
// }
// calculator(1,2, sum);


// CALLBACK HELL : Nested callbacks stacked below one another forming a pyramid structure.(pyramid of doom). This style of programming becomes difficult to understand and manage.


// function getData(dataId, getNextData){
//     setTimeout(() => {
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }

// this is nested callback hell
// getData(1, ()=>{
//     console.log("getting the value of 2....")
//     getData(2,()=>{
//         console.log("getting the value of 3....")
//         getData(3,()=>{
//             console.log("getting the value of 4....")
//             getData(4);
//         });
//     });
// });


// Promises

// Promises is for "eventual" completion of task. It is an object in JS. It is a solution to callback hell.

//syntax

// let promise = new Promise((resolve,reject)=>{
//    .....})
// resolve and reject are callbacks provided by JS.

// let promise = new Promise((resolve,reject)=>{
//     console.log("promise");
//     resolve("success");
//     //or
//     //reject("it's be rejected");
// });


// .then() and .catch()

// promise.then((res)=>{...})
// promise.catch((err)=>{...})




// function asyncFunc1(){
//  return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("data1");
//         resolve("success");
//     },4000);
//  });
// }

// function asyncFunc2(){
//  return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("data2");
//         resolve("success");
//     },4000);
//  });
// }
// console.log("fetching data 1.....");
// let p1 = asyncFunc1().then((res) => {
//     console.log(res);
//    console.log("fetching data 2....");
//     let p2 = asyncFunc2().then((res) => {
//     console.log(res);
//    });
// });


// Promise chain


// function getData(dataId){
//  return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("data",dataId)
//         resolve("success");
//     },4000);
//  });
// }
// getData(1)
// .then((res)=>{
//     return getData(2);
// })
// .then((res)=>{
//     console.log(res);
// })




// Async-Await