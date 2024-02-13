let userScore = 0;
let compScore = 0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const getCompChoice = () => {
const option=["rock","paper","scissors"];
//generate random number
const randomIdx=Math.floor(Math.random()*3);
return option[randomIdx];
};
const drawGame = () =>{
    console.log("Game was draw");
    msg.innerText="Game was Draw. Play again!";
    msg.style.backgroundColor="yellow";
}
const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You win!");
        msg.innerText =`You win! Your ${userChoice} beats Computer's ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You lose!");
        msg.innerText =`You lose! Computer's ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const PlayGame = (userChoice) =>{
    console.log("User choice = ",userChoice);
    // generate computer choice
    const compChoice=getCompChoice();
    console.log("Comp choice = ",compChoice);

    if(userChoice===compChoice){
        //draw game
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin = (compChoice==="paper") ? false : true ;  
        }else if(userChoice==="paper"){
            userWin = (compChoice==="scissors") ? false : true ;
        }else {
            userWin = (compChoice==="rock") ? false : true ;
        } 
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        PlayGame(userChoice);
    });
})