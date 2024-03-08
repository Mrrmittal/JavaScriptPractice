/*
Que: Define Variable. Diff b/w Local and Global Variable in JavaScript?
Sol: Varible are like a container that's used to store data like Integers, Float, Boolean etc. 
     Its bassically says as location where data can be stored. Variable are mainly two types.
     
     1.) Local Variable : Local variable are those that declare only in a block of code.
     2.) Global Variable: Declare a variable outside function or with a window object.

*/

let myName = "Jatin Mittal" // Declaration of Global Variable.

function firstFunction(){
    let age = 22; // Declaration of Local Variable.
    console.log("Name is : " +myName);
    console.log("Age is :" +age);
}

console.log(myName);
// console.log(+age);   Throw a compilation error because age only accessible inside the function.
firstFunction();

