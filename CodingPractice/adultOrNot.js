const prompt = require('prompt-sync')({sigint : true});
let age = prompt("what is your age : ");
if(age<18){
     console.log("Prohibted");
}
else{
     console.log("Adult");
}
age = Number.parseFloat(age);
console.log(typeof(age));