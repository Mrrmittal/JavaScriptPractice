// WAP to get if a person comes into the 10 to 20

const prompt = require('prompt-sync')()
let age = prompt("What is Your Age :")

age = parseInt(age);

if(age>=10 && age<=20){
    console.log("Yes, Person lie in Between the age group");
}
else if(age<10){
    console.log("Sorry! You are too small")
}
else{
    console.log("Sorry! Your age been passed.")
}