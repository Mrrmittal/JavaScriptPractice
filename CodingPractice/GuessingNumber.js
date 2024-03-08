// WAP to create a Game of Guessing Number.
let realNumber = 25;
const prompt = require("prompt-sync")()

while(true){
    let guessNumber = prompt("Please Enter your number : ")
    if(realNumber != guessNumber){
        console.log("Try Again");
    }
    else{
        console.log("You Win !!")
        break;
    }
}
