console.log("Hello\nWorld");

//Attributes

//getAttribute(attr) // to get the attribute value


// let div=document.querySelector("div");
// console.log(div);
// let id = div.getAttribute("id");
// console.log(id);
// let names=div.getAttribute("name");
// console.log(names);

// let para=document.querySelector("p");
// console.log(para.getAttribute("class"));




//setAttribute(attr, value) // to set the attribute val th

//  let para=document.querySelector("p");
//  console.log(para.setAttribute("class","newClass"));


//Styles

//node.style-->(to access css through JS)

// let div=document.querySelector("div");
// div.style.backgroundColor ="purple";
// div.style.fontSize="14px";


// Insert Elements

// 1)   node.append(el)  // adds at the end of the node(inside).

// Adding Button at the end of the node using append.

// let newBtn = document.createElement("button");
// newBtn.innerText="click me";
// console.log(newBtn);

// let div=document.querySelector("div");
// div.append(newBtn);




// 2)   node.prepend(el) // adds at the start of the node(inside).

// Adding Button at the start of the node using append.

// let newBtn = document.createElement("button");
// newBtn.innerText="click me";
// console.log(newBtn);

// let div=document.querySelector("div");
// div.prepend(newBtn);




// 3)    node.before(el)  // adds before the node(outside).

//Adding Button before the node(outside) using append.

// let newBtn = document.createElement("button");
// newBtn.innerText="click me";
// console.log(newBtn);

// let div=document.querySelector("div");
// div.before(newBtn);




// 4)    node.after(el)   // adds after the node(outside).

// Adding Button after the node(outside) using append.

// let newBtn = document.createElement("button");
// newBtn.innerText="click me";
// console.log(newBtn);

// let div=document.querySelector("div");
// div.after(newBtn);



// Delete Element

// .node.remove()  // remove the node

// Creating and removing the node


// let newHeading = document.createElement("h1");
// newHeading.innerHTML="HI";
// document.querySelector("body").prepend(newHeading);

// // removing section.
// let para= document.querySelector("p");
// para.remove();
// newHeading.remove();