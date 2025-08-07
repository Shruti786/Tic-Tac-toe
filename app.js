// access all the boxes and reset and new game button
let boxes=document.querySelectorAll(".box");
let resetButton=document.querySelector("#reset");
let newGameButton=document.querySelector("#New");
let msgContainer=document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

//winning moves
const winPatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

//to track the playerX and playerO turns
let turnO=true; // player O turn

// aading element listner ="click"
boxes.forEach ((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if (turnO ===true){ //player O
            box.innerText="O";
            turnO = false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;    // making the box disbled after click   
        checkWinner();
    });
    
});

//function to disable the boxes 
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
       
    }
}

//function to enable the boxes 
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

//function to reset the game

const resetGame =() =>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}


//create a function to show winner
const showWinner =(winner)=>{
    msg.innerText=`Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
}

//create a function to check winner 
const checkWinner =()=>{
    for (let pattern of winPatterns){
        //console.log(pattern[0],pattern[1],pattern[2]);
        //console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText);
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        //position value cannot be empty
        if(pos1Val !="" && pos2Val !="" && pos3Val !==""){
            //to find the winning pattern value
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
                disableBoxes();
            }
        }
    }
};

newGameButton.addEventListener("click",resetGame);
resetButton.addEventListener("click",resetGame);






