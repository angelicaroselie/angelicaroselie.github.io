//Checking if user input is valid
const getUserChoice = (userInput) => {

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'lizard' || userInput === 'spock' ||  userInput === 'bomb') {
    console.log('User input is correct!')
    return userInput;
  }
  console.log('User input is incorrect!');
  alert('Error! Give: rock, paper, scissors, lizard, or spock');
  document.getElementById('rpsinput').value = '';
}

//Calculating computer's choice with random
const getComputerChoice = () => {
  const computerChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  let randomNumber = Math.floor(Math.random() * computerChoices.length);

  return computerChoices[randomNumber];

}

//Determines winner with if... else statement

/*
"Scissors cuts paper, 
paper covers rock, 
rock crushes lizard, 
lizard poisons Spock, 
Spock smashes scissors, 
scissors decapitates lizard, 
lizard eats paper, 
paper disproves Spock, 
Spock vaporizes rock, 
rock crushes scissors."

*/

const determineWinner = (userChoice, computerChoice) => {


  //Secret Code for winning
  if (userChoice === 'bomb') {
    return 'You won!';
  }


  //In case of a tie
  if (userChoice === computerChoice) {
    return 'Game was a tie!';
  }

  // Determine first if player wins and otherwise computer wins
  if ((userChoice === 'scissors' && computerChoice === 'paper') || 
      (userChoice === 'paper' && computerChoice === 'rock') || 
      (userChoice === 'rock' && computerChoice === 'lizard') ||
      (userChoice === 'lizard' && computerChoice === 'spock') ||
      (userChoice === 'spock' && computerChoice === 'scissors') ||
      (userChoice === 'scissors' && computerChoice === 'lizard') ||
      (userChoice === 'lizard' && computerChoice === 'paper') ||
      (userChoice === 'paper' && computerChoice === 'spock') ||
      (userChoice === 'spock' && computerChoice === 'rock') ||
      (userChoice === 'rock' && computerChoice === 'scissors')) {
    return 'You won!';
  } else {
    return 'Computer won!';
  }
}



//Play game function, gets user input from HTML input, makes it lowercase and passes it to functions

const playGame = () => {
  let userInput = document.getElementById('rpsinput').value; //variable from input
  const userChoice = getUserChoice(userInput.toLowerCase());


  //Checks if userChoice is correct choice.
  if (userChoice) {

    const computerChoice = getComputerChoice();

    //Emoji conditions here later??


    //Logging results
    console.log(`You threw: ${userChoice}`);
    document.getElementById('rpsUserDisplay').innerHTML = `You threw: ${userChoice}`;
  
    console.log(`The computer threw: ${computerChoice}`);
    document.getElementById('rpsComputerDisplay').innerHTML = `Computer threw: ${computerChoice}`;
  
    console.log(determineWinner(userChoice, computerChoice));
    document.getElementById('rpsResult').innerHTML = determineWinner(userChoice, computerChoice);
  



  }


};


//Function for enter key to play game
let rpsInputForEnter = document.getElementById('rpsinput');
rpsInputForEnter.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        //When enter is pressed, clicks the play button
        document.getElementById('playGame').click();
    }
});

