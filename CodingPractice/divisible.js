// WAP a to check a number is divisible by 2 or 3 or Both

const prompt = require("prompt-sync")();
let number = prompt("Please enter a number \n : ");
number = parseInt(number);

    if(number % 2 ==0 && number % 3 != 0){
        console.log("Number is divisible by 2 only.");
    }
        else if(number % 3 ==0 && number % 2 != 0){
            console.log("Number is divisible by 3 only.");
        }
        else if(number % 2==0 && number % 3 == 0){
            console.log("Number is divisible by 2 and 3 both.");   
        }
    else{
        console.log("No, Please try with another number");
    }