console.log("Hello\nWorld");


//       Arrays   --- Non-Primitive type of object and the are mutable that means they can be changed.


// Collection of items

// Examples:

// let name= ["abc","def","ghi","jkl"];
// console.log(name);

// let marks=[98, 94, 34, 56, 24,33,53];
// console.log(marks);

// let info=["abc",77,"USA"];
// console.log(info);



// Array Indices

// To change the value of details[3] from array we can write as:

// let details= ["abc","def","ghi","jkl"];
// console.log(details);
// details[3]="mno";
// console.log(details);



// Looping over an Array

// Array length is the total number of items in the array.
// (  last index + 1 )


// let names= ["abc","def","ghi","jkl"];
// for(let i=0; i<names.length; i++){
//  console.log(names[i]);
// }



// for of loop
// let marks= [85, 97, 55, 65, 45, 42];
// for (let el of marks){
//     console.log(el);
// }

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Practice Qn

//Qno.1

// For a given array with marks of students -> [85, 97, 55, 65, 45, 42]. Find the average marks of the entire class.

// let marks=[85, 97, 55, 65, 45, 42];
//  let sum=0;
//  for(let value of marks){
//  sum=sum+value;
//  }
//  avg=sum/marks.length;
//  console.log(`The average marks of the student=${avg}`);




// Qno.2

// For a given array with prices of 5 items -> [250, 645, 300, 900, 50]. All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

//method 1

// let items=[250, 645, 300, 900, 50];
// i=0;
//  for(let val of items){
//     let offer= val/10;
//     items[i]=items[i]-offer;
//     console.log(`The value after offer is ${items[i]}`);
//     i++;
//  }
 

//2nd Method

// let items=[250, 645, 300, 900, 50];
// for(let i=0; i<items[i];i++){
//     let offer=items[i]/10;
//     items[i]=items[i]-offer;
// }
// console.log(items);


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Arrays Methods

// push(): add to end.

//Example

// let fooditems = ["apple", "banana", "mango"];
// fooditems.push("litchi", "orange","kiwi");
// console.log(fooditems);   
// Ans: ["apple", "banana", "mango", "litchi", "orange","kiwi"]



// pop(): delete from end and return.

//Example

// let fooditems = ["apple", "banana", "mango"];
// let deleteditem=fooditems.pop();
// console.log(fooditems); 
// console.log("the deleted item is=",deleteditem);
// Ans ["apple", "banana"]




// toString(): converts array to string.

//Example

// let fooditems = ["apple", "banana", "mango"];
// console.log(fooditems);
// console.log(fooditems.toString());
//Ans: apple, banana, mango



// concat(): To joins multiple arrays and returns result.

// let arr1=["abc", "def", "ghi"];
// let arr2=["ijk", "lmn", "opq"];
// let arr3=arr1.concat(arr2);
// console.log(arr3);
//Ans: ['abc', 'def', 'ghi', 'ijk', 'lmn', 'opq']




//unshift(): add to start.

// let arr1=["def","ghi","ijk"];
// let arr2=(arr1.unshift("abc"));
// console.log(arr1);
// Ans:["abc","def","ghi","ijk"]



//shift():remove from start

// let arr1=["abc","def","ghi","ijk"];
// let arr2=(arr1.shift());
// console.log(arr1);
