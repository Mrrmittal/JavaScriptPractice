console.log("Hii, Today is Monday and Happy New Year")
let a = "01/01/2024"
console.log(a);

a = "New Year! Party"
console.log(a);

// Variable (var) var variable is globally scoped
var age = 55;
var age = 57; // we can declare variable again and again;
{
    var age = 98;
    console.log(age);
}

console.log(age);

// Variable(let) let keyword is locally varible

let marks= 25;
marks = 27; // Variable cannot re declare again as like var

{
    marks = 30;
    console.log(marks);
}

console.log(marks);

// const

const author = "Jatin Mittal";
console.log(author);
// author = "Jatin ";
{
    const author = "Jatin";
    console.log(author);
}




