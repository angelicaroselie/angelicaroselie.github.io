let maxDiceNumber = 2;
let isSecondDice = false; //Second dice boolean value is false in the beginning because second dice is hidden
document.getElementById("dice1").innerHTML = "";
document.getElementById("dice2").innerHTML = "";
document.getElementById("input1").value = "";
document.getElementById("input2").value = "";

document.getElementById("input1").focus(); //Set focus to input 1

let turnCounter = 0;

const addDice = () => {
    document.getElementById("dice2").style.display = "inline"; //Display a new dice
    document.getElementById("subBtn").style.display = "inline"; //Display sub btn
    document.getElementById("input2").style.display = "inline"; //Display input2
    document.getElementById("diceinputcontainer2").style.display = "inline"; //Display diceinputcontainer2
    document.getElementById("addBtn").style.display = "none"; //Hide add btn
    isSecondDice = true; //Setting second dice boolean value true

    document.getElementById("input2").focus(); //Set focus to input 2

}

const subDice = () => {
    document.getElementById("input2").value = ""; //Clearing Dice 2 input
    document.getElementById("dice2").innerHTML = ""; //Clearing Dice 2
    document.getElementById("dice2").style.display = "none"; //Hide second dice
    document.getElementById("addBtn").style.display = "inline"; //Display add btn
    document.getElementById("subBtn").style.display = "none"; //Hide sub btn
    document.getElementById("input2").style.display = "none"; //Hide input2
    document.getElementById("diceinputcontainer2").style.display = "none"; //Hide diceinputcontainer2
    isSecondDice = false; //Setting second dice boolean value false

    document.getElementById("input1").focus(); //Set focus to input 1


}

const rollDice = () => {

    //Can alternative these multipliers to set 6 dice to different dnd dices
    let n1 = document.getElementById("input1").value; // var from input
    let n2 = document.getElementById("input2").value;

    //Check if inputs are numbers, alert if not
    if ((isNaN(n1 || n2) || isNaN(n1 && n2))) {
        alert("Give only numbers.");
        document.getElementById("input1").value = ""; //Clear input
        document.getElementById("input2").value = ""; //Clear input
        n1 = ""; //set n1 back to 0
        n2 = "";
        document.getElementById("dice1").innerHTML = "";
        document.getElementById("dice2").innerHTML = "";
    }

    //Check if first dice is empty, alert
    if (n1 === "") {
        alert("Give number for the first dice")
        n1 = ""; //set n1 back to 0
        n2 = ""; //set n1 back to 0
    }

    //Check if numbers are not between 1-20, alert
    else if (n1 < 1 || n1 > 20) {
        alert("Give only numbers between 1-20.");
        document.getElementById("input1").value = ""; //Clear input
        document.getElementById("input2").value = ""; //Clear input
        n1 = ""; //set n1 back to 0
        n2 = ""; //set n1 back to 0
    }

    //Check if second dice is empty, and boolean value true, alert
    //Boolean shows that second dice is activated
    if (n2 === "" && isSecondDice) {
        alert("Give number for the second dice")
        n1 = ""; //set n1 back to 0
        n2 = ""; //set n1 back to 0
    }

    //Check if numbers are not between 1-20, alert
    else if ((n2 < 1 || n2 > 20) && isSecondDice) {
        alert("Give only numbers between 1-20.");
        document.getElementById("input1").value = ""; //Clear input
        document.getElementById("input2").value = ""; //Clear input
        n1 = ""; //set n1 back to 0
        n2 = ""; //set n1 back to 0
    }

    //Checking if input values are empty

    if (n1 == "" && n2 == "") {
        let d1 = "";
        let d2 = "";
    }
    else {
        d1 = Math.floor(Math.random() * n1) + 1; // Calculates random with given value
        d2 = Math.floor(Math.random() * n2) + 1;
    }




    if ((n1 !== "" && !(isSecondDice)) || (n1 !== "" && n2 !== "" && isSecondDice)) {
        turnCounter++; //Adding +1 to turn counter var
        document.getElementById("displayturn").innerHTML = "Turn: " + turnCounter; //Displaying turn counter
    }

    document.getElementById("dice1").innerHTML = d1;  //Shows the random number on the dice
    if (n2 !== "") {
        document.getElementById("dice2").innerHTML = d2;
    }


    let sum = d1; // Calculating the sum of the dices
    if (isSecondDice) {
        sum = d1 + d2;   // Checks if second dice is displayed and adds it's value to dice1 value
    }
    document.getElementById("displaysum").innerHTML = "Total: " + sum;




    if (!(isSecondDice)) {
        document.getElementById("input1").focus(); //Set focus to input 1 if there is no second dice
    }
    else {
        document.getElementById("input2").focus(); //Set focus to input 2
    }

}

//Reset function
const reset = () => {
    location.reload();  //Resetting the app by reloading the document
}



//Function for enter key roll & input 1
let input = document.getElementById("input1");
input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        //When enter is pressed, clicks the add button
        document.getElementById("rollBtn").click();
    }
});

//Function for enter key roll & input 2
let input2 = document.getElementById("input2");
input2.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        //When enter is pressed, clicks the add button
        document.getElementById("rollBtn").click();
    }
});


