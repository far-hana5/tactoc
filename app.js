let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0=true;

//array(2d)
const winPatterns=[
         [0,1,2],
         [0,3,6],
         [0,4,8],
         [1,4,7],
         [2,5,8],
         [2,4,6],
         [3,4,5],
         [6,7,8]
];
const resetGame= ()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
        
}
boxes.forEach((box)=> {
box.addEventListener("click",() =>{
console.log("box was clicked");
if(turn0){
    box.innerText="O";
    turn0=false;
}else{
    box.innerText="x";
    turn0=true; 
}
box.disabled=true;
checkWinner();
});
});
const disableBoxes=() => {
for(let box of boxes){
    box.disabled=true;
}
};
const enableBoxes=() => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }

    };
const showWinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = ()=>{
    for(let pattern of winPatterns){
       /* console.log( boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText
            );*/
            let val1=boxes[pattern[0]].innerText;
            let val2=boxes[pattern[1]].innerText;
            let val3=boxes[pattern[2]].innerText;
if(val1!="" && val2!="" && val3!=""){
    if(val1==val2 && val2==val3){
        console.log("Winner",val1);
        showWinner(val1);
    }
}
    }
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
