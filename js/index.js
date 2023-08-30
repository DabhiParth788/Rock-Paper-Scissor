
const handOptions = {
    "rock": "./assets/Rock.png",
    "paper": "./assets/Paper.png",
    "scissors": "./assets/Scissors.png",
}

let SCORE = 0;

const pickUserHand = (hand) => {
  
    // hide the current page
    let hands = document.querySelector(".hands");
    hands.style.display = 'none';

    // show the next page with the hand you pick

    let contest = document.querySelector(".contest");
    contest.style.display = 'flex'

    // set the user pick
    document.getElementById("userPickImage").src= handOptions[hand];
 
    let cpHand = pickComputerHand();
    referee(hand, cpHand);

}

const pickComputerHand = () => {
    let hands = ["rock", "paper", "scissors"]
    let cpHand = hands[Math.floor(Math.random()*3)]

    
    document.getElementById("computerPickImage").src= handOptions[cpHand];

    return cpHand;


}

const referee = (userHand, cpHand) =>  {

    if(userHand == "paper" && cpHand == "scissors"){
        setDecision("YOU LOSE!");
    }
    if(userHand == "paper" && cpHand == "rock"){
        setDecision("YOU WIN!");
        setScore(SCORE + 1)
    }
    
    if(userHand == "scissors" && cpHand == "rock"){
        setDecision("YOU LOSE!");
    }
    if(userHand == "scissors" && cpHand == "paper"){
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
    } 
    
    if(userHand == "rock" && cpHand == "paper"){
        setDecision("YOU LOSE!");
    }
    if(userHand == "rock" && cpHand == "scissors"){
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
    }
    
    if (userHand == cpHand) {
        setDecision("IT'S TIE!");
        
    }
    
}

const restartGame = () =>{
    // hide the current page
    let hands = document.querySelector(".hands");
    hands.style.display = 'flex';

    // show the next page with the hand you pick

    let contest = document.querySelector(".contest");
    contest.style.display = 'none'
}

const setDecision = (decision) => {
    console.log(decision);
    document.querySelector(".decision h1").innerText = decision
}

const setScore = (score) => {
    console.log(score);
    SCORE = score;
    document.querySelector(".score h1").innerText = score;
}