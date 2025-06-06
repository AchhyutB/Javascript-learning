console.log("Hello\nWorld");

// just like <br> tag in html to break the line
//In JS there is a escape character that is: \n
//To get TAB space we use \t to get ("   ")space.


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------


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



// Even num from 1 to 100

// for (let num = 0; num <= 100; num++) {
//   if (num % 2 == 0) {
//     console.log("num=", num);
//   }
// }



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enter correct vakue.

// let gameNum = 25;
// let userNum = prompt("guess the num:");
// while (userNum != gameNum)      //while using prompt the number itself in the form of string so in line no "112" untill n unless in line no "110" the num is in ("") form don't use the "=="if the value is in string use "=="
//  {
//   userNum = prompt("you enter wrong number.Try again");
// }
// console.log("you enter the right number");



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------



//Sting

// Sting is a sequence of character used to represent text.

// Create string
// let str = "abcd";
// let str2 = 'abc';

//string length
//str.length  // it give total number of character in a string

//string indices
//str[0],str[1],str[2]

//example from the above topics:

// let str="abcd";
// str.length //(runs by typing it in console when pressing f12)ans:4
// console.log(str[1]); //ans: b




//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------




// Template Literals

//syntax

// `Stringtext ${expression} stringtext`

//is the way of combining all the stings in single string.


// let specialString = `this is Template literals`; 
// //(``) known as backticks
// console.log(specialString);



//for Example

// let obj = {
//   item: "pen",
//   price: 10,
// };

// // console.log("the cost of", obj.item, "is", obj.price, "rupees");

// //instead of this we can write in this manner called as template literals



// let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);




//Sting Interpolation
//to create stings by doing substitution of placeholder

// `Stringtext ${expression} stringtext`



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------




// For UpperCase

//  let str="abcd";
//  let newstr = str.toUpperCase();
//  console.log(str);
//  console.log(newstr);
// ans:"ABCD"




// For LowerCase

//  let str="ABCD";
//  let newstr = str.toLowerCase();
//  console.log(str);
//  console.log(newstr);
//  ans:"abcd"


// IMP==== The string are immutable means it don't change
// for small change the original string don't chance fresh new string is created




// For Removing Whitespaces

// str.trim()

// let str="  abc  ";
// console.log(str.trim());



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------



// More String Methods in JS



//str.slice(start, end?)  // returns part of string

// let str="01234567";
// console.log(str.slice(1,6));  //ans:12345



// str1.concat(str2) // joins str2 with str1

// let str1="abcd";
// let str2="123";
// let result = str1.concat(str2);    
//  console.log(result);   // ans= abcd123



//  Method Second


// let str1="abcd";
// let str2="123";
// let result = "str1 and str2 joins like:" + str1 + str2;
// console.log(result);






// str.replace(searchVal, newVal) // search from string and replace new value.


// let str="abcd";
// console.log("the previous value is=",str);
// console.log("the new replace value is=",str.replace("d", "."));  
// ans: in the str=abcd the value "d" got replace by "." in new string.



// str="abcddd";
// console.log("the previous value is=",str);
// console.log("the new replace value is=",str.replaceAll("d", "."));
// ans: Same as above but the "str.replaceAll" replace all "d" to ".".



// str.charAt(idx)    // to find the character in the string.


// let str ="IloveJS";
// console.log(str.charAt(6)); //ans: S

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Practice Qn


//Qno.1

// prompt the user to enter their fullname. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length.


// let str1=prompt("enter your fullname without space");
// let str2="@";
// result= str2.concat(str1)+str1.length;
// console.log(str1);
// console.log(result);


// TO LEARN MORE ABOUT LOOPS AND STRING VISIT: MDN WEBSITE
