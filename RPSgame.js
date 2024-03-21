let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const button=document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const showWinner=(userWin)=>{
   if (userWin) {
    userScore++;
   userScorePara.innerText=userScore;
    button.innerText = "YOU WIN!!";
    button.style.backgroundColor="green"
    button.style.color="white";
   } else {
    compScore++;
    compScorePara.innerText=compScore;
    button.innerText = "YOU LOSE!!";
    button.style.backgroundColor="red"
  button.style.color="white";
   }
}

const drawGame=()=>{
  button.innerText = "GAME WAS DRAW!!";
  button.style.backgroundColor="yellow";
  button.style.color="black";
}
const genCompChoice=()=>{
    let option=["rock","paper","scissors"];
    const randId=Math.floor(Math.random()*3);
    return option[randId]
}   

const playGame=(userChoice)=>{
   console.log("users choice ",userChoice);
   const compChoice = genCompChoice()
   console.log("comp choice",compChoice);

   if (userChoice===compChoice) {
     drawGame(); 
   } else {
       let userWin=true;
       if (userChoice==="rock") {
        //comp choice paper, scissors
        userWin = compChoice==="paper"?false:true;
       } else if (userChoice==="paper") {
           userWin= compChoice==="scissors"?false:true;
       }else {
        userWin=compChoice==="rock"?false:true;
       }  
       showWinner(userWin);
   }
};

choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id")
    playGame(userChoice)
  });
});
