let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const gencompChoice =() =>
{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3)
    return options[randIdx];

}
const drawGame =()=>
{
    msg.innerText= "game was draw,play again !"
    msg.style.backgroundcolor ="#081b31";
};

const showWinnner = (userWin, userChoice, compchoice) =>
{
    if(userWin)
    {   userscore ++;
        userScorepara.innerText = userscore;

        msg.innerText= `You Win ! ${userChoice} beats ${compchoice}`;
        msg.style.backgroundcolor ="green";

    }
    else 
    {

        compscore++;
        compScorepara.innerText = compscore;

        msg.innerText=`You lose ! ${compchoice} beats your ${userChoice}`;

        msg.style.backgroundcolor ="red";
    }

};

const playGame =(userChoice)=>
{
  console.log("user choice =", userChoice);
  //generate computer choice -> modular

  const compchoice = gencompChoice();
  console.log("comp choice= ", compchoice)
  if(userChoice === compchoice)
  {
    drawGame();

  }
  else 
  {
    let userwin = true;
    if (userChoice ==="rock")
    {
     userwin = compchoice ==="paper" ?false : true ;


    }else if (userChoice === "paper")
    {
        userwin = compchoice === "scissors" ? false : true ;

    }
    else 
    {
       compchoice ==="rock" ? false : true ;

    }
    showWinnner(userwin, userChoice , compchoice);

  }

}

choices.forEach((choice)=>
{
    choice.addEventListener("click", ()=>
    {   
        const userChoice= choice.getAttribute("id");
        console.log("choice was clicked",userChoice)
        playGame(userChoice);

    })
})