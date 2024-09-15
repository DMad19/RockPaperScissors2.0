const getcomputerChoice = () =>{
    let options = ['rock','paper','scissors']
    let choice = Math.ceil(Math.random()*10)%3;
    return (options[choice])
}

const getHumanChoice = () => {
    while(true){
        let choice = prompt('Enter rock/paper/scissors');
        if( (/rock/i).test(choice)  || (/paper/i).test(choice) || (/scissors/i).test(choice)){
            return choice;
        }else{
            alert('invalid choice')
        }
    }
}

let humanScore = 0;
let computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
    if(humanChoice == computerChoice){
        return ;
    }
    else if( (humanChoice == 'rock' && computerChoice =='scissors') ||
        (humanChoice == 'paper' && computerChoice=='rock') ||
        (humanChoice == 'scissors' && computerChoice=='paper')
    ){
        humanScore +=1 ;
        console.log("You win a round")
    }else{
        computerScore +=1;
        console.log("Computer win a round")
    }
}

const playGame = () =>{
    for(let i=0;i<5;i++){
        let computerChoice = getcomputerChoice();
        let humanChoice = getHumanChoice();
        playRound(computerChoice,humanChoice)
    }
    console.log(`Your Score: ${humanScore}  Computer Score: ${computerScore}`)
    if(humanScore > computerScore){
        console.log('You Won The Game')
    }else if(humanScore == computerScore){
        console.log('Math Tied')
    }
    else{
        console.log('Computer Won The Game')
    }
}

playGame()