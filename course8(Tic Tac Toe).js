let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#Reset");

let turnO = true // playerX, playerO

const winPatterns= [
     [0,1,2],
     [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,2],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("button was clicked");
        if(turnO){   //PlayerO
            box.innerText="O";
            turnO=false;
        } else {     //PlayerX
            box.innerText="X";
        turnO=true;
        }
        box.disabled=true;


        checkWinner();
    });
});
const checkWinner=()=>{
     
}