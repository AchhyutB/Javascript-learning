console.log("hello world");

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Arithemic Operator

// let a = 5;
// let b = 2;
// console.log("a+b=", a + b);
// console.log("a-b=", a - b);
// console.log("a*b=", a * b);
// console.log("a/b=", a / b);
// console.log("a%b=", a % b);
// console.log("a**b=", a ** b); ------//  (**) means a^b

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Unary Operator

// let a = 5;
// let b = 2;
// console.log("a=", a, "& b=", b);
// a++;
// console.log("a++=", a);  //----------Post Increment  and pre increment will be ++a
// a--;
// console.log("a--=", a);  //----------Post Decrement  and pre decrement will be --a

//post increment and decrement take display the value before the a++/a--
//pre increment and decrement take display the value after the ++a/--a

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Assignment Operators -------( =, +=, -=, *=, %= **=)

// let a = 5;
// let b = 5;
// let c = 5;
// let d = 5;
// let e = 5;
// let f = 5;
// let g = 5;

// a += 4; // means a=a+4
// console.log("a=", a); //9

// b -= 4; // means b=b-4
// console.log("b=", b);  //1

// c *= 4; // means c=c*4
// console.log("c=", c);  //20

// d /= 4; // means d=d/4
// console.log("d=", d);  //1.25

// e %= 4; // means e=e%4
// console.log("e=", e);  //1

// f **= 4; // means f=f**4
// console.log("f=", f);  //625

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Comparison Operators   (== equal to,   !=  not equal to,            === equal to & type, !==  not equal to & type)

// let a = 5;
// let b = 2;

// console.log("5==2", a == b);  //false

// let c = 5;
// let d = 2;

// console.log("c!=d=", c != d);   //true

// let e = 5;
// let f = 2;

//console.log("e===f", e === f);//false true come only both value is same

// let g = 5;
// let h = "2"; // string to number

// console.log("g!==h", g !== h); //true if the value of the h=5 then the result will be false

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Conditional Statements

// 1) If Statement

// 1st example

// let age = 15;
// if (age >= 18) {
//   console.log("can vote");
// }
// if (age<18){
//     console.log("can't vote");
// }

// 2nd example

// let mode = "dark";
// let color;

// if (mode === "dark") {
//   color = "black";
// }
// if (mode === "light") {
//   color = "white";
// }
// console.log(color);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2) If-Else Statement

// 1st Example

// let age = 18;
// if (age >= 18) {
//   console.log("can vote");
// } else {
//   console.log("can't vote");
// }

//2nd Example

//  let number = 4;
// {
//   if (number % 2 === 0) {
//     console.log(number, "is even");
//   } else {
//     console.log(number, "is odd");
//   }
// }

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Else-If Statement

// 1st Example

// let age = 65;
// {
//   if (age < 18) {
//     console.log(age, "are junior");
//   } else if (age >= 65) {
//     console.log(age, "senior");
//   } else {
//     console.log(age, "middle");
//   }
// }

//2nd Example

// let mode = "dark";
// let color;

// if (mode === "dark") {
//   color = "black";
// } else if (mode === "gray") {
//   color = "gray";
// } else {
//   color = "white";
// }
// console.log(color, "color");

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------Practice Questions------------------------------------------------------------------------
