let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#rest-btn")
let msg1 = document.querySelector("#msg")
let newGameBtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#winner-msg")
let turn0 = true;

const winPatters = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turn0 = true;
    enableBoxes ();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0 == true){
            turn0 = false
            msg1.innerText = `Turn for X`
            box.innerHTML = "O";
        }else{
            turn0 = true
            msg1.innerText = `Turn for O`
            box.innerText = "X";
        }
        
        box.disabled = true;

        checkWinner();
        
    })
})


const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true
    }
}

const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerHTML = `Congratulations, Winner is ${winner}`
    msgContainer.classList.remove("hide");
    disableBoxes ();
}

const checkWinner = () => {
    for (let pattern of winPatters){
        pos1 = boxes[pattern[0]].innerText
        pos2 = boxes[pattern[1]].innerText
        pos3 = boxes[pattern[2]].innerText

        if(pos1 != "" && pos2 != "" && pos3 != "" ){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner ", pos1)
                showWinner(pos1);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);