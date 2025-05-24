console.log("Hello\nWorld");


// Events



// The changes in the state of an object is known as an event
// Events are fired to notify code of "intresting changes" that may affect code execution.

// Mouse Events (click, double click, etc)

// Syntax:
// node.event=()=>{
    // handle the event.
// }



// let btn1= document.querySelector("#btn1");
// btn1.onclick = () => {
//     console.log("Button was clicked");
// }  

// let btn2=document.querySelector("#btn2");
// btn2.ondblclick =()=>{
// console.log("It was click two times"),alert('Did you click 2 times?');
// }

// let box=document.querySelector("#box");
// box.onmouseover =()=>{
//     console.log("You are inside the div");
// }


// Event Listeners 

// node.addEventListener(event, callback)
// node.removeEventListener(event, callback)




// Practice Qn.

// Create a toggle button that change the screen to dark mode when clicked and light mode when clicked again.



// let modeBtn = document.querySelector("#mode");
// let body= document.querySelector("body");
// let currMode ="light";
// modeBtn.addEventListener("click",() => {
//     if(currMode==="light"){
//         currMode="dark";
//         body.classList.add("dark");
//        body.classList.remove("light");
//     }else{
//         currMode="light";
//           body.classList.add("light");
//          body.classList.remove("dark");
//     }
//     console.log(currMode);
// });





//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------




// FOR 1ST SIMPLE BUTTON

// let modeBtn = document.querySelector(".theme-checkbox");
// let currMode ="light";
// modeBtn.addEventListener("click",() => {
//     if(currMode==="light"){
//         currMode="dark";
//         document.querySelector("body").style.backgroundColor="black";
//     }else{
//         currMode="light";
//          document.querySelector("body").style.backgroundColor="white";
//     }
//     console.log(currMode);
// })


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------



// let modeToggle = document.getElementById("input");

// modeToggle.addEventListener("change", () => {
//     if (modeToggle.checked) {
//         // Dark mode
//         document.body.style.backgroundColor = "black";
//         console.log("dark");
//     } else {
//         // Light mode
//         document.body.style.backgroundColor = "white";
//         console.log("light");
//     }
// });
