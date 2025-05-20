console.log("Hello\nWorld");

// 3 musketeers of Web Dev

// 1. HTML, 2. CSS, 3. JavaScript

// Window Object                                                                                                                                                         The window object represents an open window in a browser. It is browser's object(not JS's) and is automatically created by browser. It is a global object with lots of properties and methods.



// DOM( Document Object Model)

// When a web page is loaded, the browser creates a DOM of the page.


//how it works

// HTML---> DOCUMENT---> HTML---> 1.HEAD-->meta, meta, title, link.  2.BODY---> DIV->img, h1, p, div, span...  SCRIPT---> Script


// DOM Manipulation


// "console.log" prints the value in a readable format (often as a string)
// "console.dir" displays the properties of a JavaScript object in an  interactive tree structure.


//1. Selecting with id
//   document.getElementById("myid")

//2. Selecting with class
//   document.getElementByClassName("myClass")

//3. Selecting with tag
//   document.getElementsByTagName("p")

//4. Query Selector

//i. return first comment
//   document.querySelector("myId / myClass / tag")

//ii. Returns a nodelist
//   document.querySelectorAll("myId / myClass / tag")


// Example.

// for ID

// let heading=document.getElementById("heading");
// console.dir(heading);

// for CLASS

// let heading2=document.getElementsByClassName("heading2");
// console.dir(heading2);

// for TAG

// let p= document.getElementsByTagName("p");
// console.dir(p);

//for QUERY----> i) Return first comment

// let element = document.querySelector("p");
// console.dir(element);
// let element1 = document.querySelector("#heading");
// console.dir(element1);
// let element2 = document.querySelector(".heading2");
// console.dir(element2);

// ii) Return a nodelist

// let element = document.querySelectorAll("p");
// console.dir(element);
// let element1 = document.querySelectorAll("#heading");
// console.dir(element1);
// let element2 = document.querySelectorAll(".heading2");
// console.dir(element2);



// PROPERTIES

//tagName: returns tag for element nodes
//innerText: returns the text content of the element and all its children
//innerHTML: returns the plain text or HTML contents in the element
//textContent: returns textual content even for hidden elements


//Practice Qn

//Qno.1) Create a H2 heading element with text-"Hello JS".Append "Hello JavaScript" to this text using JS.


// let h2= document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText=h2.innerText+"\tHello Javascript"



//Qno.2) Create 3 divs with common class name- "box". Access them and add some unique text to each of them.


// let divs=document.querySelectorAll(".box");
// let idx=1;
// for(div of divs)
// {
// div.innerText = `new unique value ${idx}`;
// idx++;
// }