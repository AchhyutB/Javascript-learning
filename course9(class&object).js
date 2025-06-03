// Prototype in JS

// const student =  {
//     fullName : "Abc",
//     marks: 66,
//     printMarks: function(){
//         console.log("marks=",this.marks);
//     },
// };

// We can set prototype by __proto__
// If object and prototype have same method, object's method will be used 



// Classes In JS
// Class is a program-code template for creating objects. Those objects will have some state (variables) & some behaviour (functions) inside it.

// Syntax

// class Myclass{
//     constructor(){.....}
//     myMethod(){......}
// }
// let myObj = new Myclass();


// class ToyotaCar {
//     constructor(brand, mileage){
//         console.log("Creating the object");
//         this.brand = brand;
//         this.mileage = mileage;
//     }

//     start(){
//         console.log("Start");
//     }

//     stop(){
//         console.log("Stop");
//     }
// }

// let fortuner = new ToyotaCar("Fortuner", 10);
// console.log(fortuner);

// let lexus = new ToyotaCar("Lexus", 12);
// console.log(lexus);



//Inheritance in JS

// inheritance is passing down properties and methods from parent class to child class

// class Parent {
//}

// class Child extends Parent{
//}

// if Child and parent have same method, child's method will be used [method overloadding]




// class Parent{
//     hello(){
//         console.log("hello");
//     }
// }
// class Child extends Parent{ 
// }



// class Person{
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
// }
// class Engineer extends Person{
//     work(){
//         console.log("Solve Problems, build something");
//     }
// }
// let engObj = new Engineer();


// Super Keyword

// The super keyword is used to call the constructor of its parent class to access the parent's properties and methods

//  super(args)    //calls Parent's constructor
// super.parentMethod(args)