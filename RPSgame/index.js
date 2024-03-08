const choice =["Rock","Paper","Scissor"];

const playerdisplay = document.getElementById("playersdisplay");
const computerdisplay = document.getElementById("computersdisplay");
const resultdisplay = document.getElementById("resultdisplay");
const playerScore = document.getElementById("playersScore");
const computerScore = document.getElementById("computersScore");
let playerscore = 0;
let computerscore = 0;


function playerchoices(playerchoice){
    const computer = choice[Math.floor(Math.random()*3)];
    
    let result ="";
    
    if(playerchoice===computer){
        result = "It's a Tie";        
    }
    else{
        switch(playerchoice){
            case "Rock":
                result = (computer ==="Scissors") ? "You Win" : "You Lose";    
                break;
            case("Paper"):
                result = (computer ==="Rock") ? "You Win" : "You Lose";                
                break;            
            case "Scissor":
                result = (computer ==="Paper")? "You Win" : "You Lose";                
                break;
        }
    
    }
   
    playerdisplay.textContent = `Player's Choice ➡️ ${playerchoice}`;
    computerdisplay.textContent = `Computer's Choice ➡️ ${computer}`;
    resultdisplay.textContent = result;

    resultdisplay.classList.remove("greentext");
    resultdisplay.classList.remove("redtext");

    
    if (result === "You Win"){ 
            resultdisplay.classList.add("greentext"); 
            playerscore++;
    }
    else if(result === "You Lose"){
            resultdisplay.classList.add("redtext");  
            computerscore++;       
    } 
    
    playerScore.textContent = `Total player score :${playerscore}`;
    computerScore.textContent = `Total computer score :${computerscore}`;

    
}


 





