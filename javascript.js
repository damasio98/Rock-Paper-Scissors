Outcomes = ["rock" , "paper", "scissors"];
let lost = 0;
let win = 0;

const score = document.querySelector('#score')
const score2 = document.querySelector('h4')

const Rock = document.querySelector('#Rock')
const Paper = document.querySelector('#Paper')
const Scissors = document.querySelector('#Scissors')

Rock.addEventListener('click',RockFunction)
Paper.addEventListener('click', PaperFunction)
Scissors.addEventListener('click', ScissorsFunction)

function RockFunction(){
    Result('rock')
}
function ScissorsFunction(){
    Result('scissors')
}
function PaperFunction(){
    Result('paper')
}

function computerPlay(){
    PCOutcome = Outcomes[Math.floor(Math.random()*Outcomes.length)];
    return PCOutcome
}

function Result(playerSelection){
    score.textContent = ('Score:' + win + '-' + lost)
    score2.textContent = ''
    computerSelection = computerPlay();
    if (playerSelection==computerSelection){
        score2.textContent = 'A tie, huh? Try again'
    }
    else if (playerSelection=="rock"){
        if (computerSelection=="paper"){
            score2.textContent = 'The PC is better than you'
            Score(1,0)
        }
        else { 
            score2.textContent = 'Good one! You win.'
            Score(0,1)
        }
    }

    else if (playerSelection=="paper"){
        if (computerSelection=="scissors"){
            score2.textContent = 'The PC is better than you'
            Score(1,0)
        }
        else { 
            score2.textContent = 'Good one! You win.'
            Score(0,1)
            }
    }

    else if (playerSelection=="scissors"){
        if (computerSelection=="rock"){
            score2.textContent = 'The PC is better than you'
            Score(1,0)
        }
        else { 
            score2.textContent = 'Good one! You win.'
            Score(0,1)
        }
    }
}

function Score(L,W){
    
    if (W === 1){
        win += 1;
        score.textContent = ('Score:' + win + '-' + lost)
        if (win === 3){
            score2.textContent = 'You won!! Can you do it again?'
            lost = 0;
            win = 0;
        }    
    }
    
    else if (L === 1){
        lost += 1;
        score.textContent = ('Score:' + win + '-' + lost)
        if (lost === 3){
            score2.textContent = 'You tried your best but still lost. Give it another try!'
            lost = 0;
            win = 0;
        }
    }
}