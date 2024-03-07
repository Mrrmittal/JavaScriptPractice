// WAP to check given number is divisible by 2 or 3 or not

const prompt = require("prompt-sync")();
let number = prompt("Please enter a number");
number = parseInt(number);

if(number % 2==0 && number % 3 == 0){
    console.log("Yes! Given Number is divisble by 2 as well as 3");
}

else{
    console.log("No, Please try with another number");
}