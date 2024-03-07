// WAP to derive the factorial of a number
const prompt = require("prompt-sync")()

let i;
let number = prompt("Enter a number : ");
if(number == 0 && number == 1){
    console.log("1");
}
else{
    let fact = 1;
    for(let i=1; i<=number; i++){
        fact *= i;
    }
    console.log(fact);
}