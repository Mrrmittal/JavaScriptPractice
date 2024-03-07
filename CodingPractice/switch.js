const prompt = require('prompt-sync')();
let day1 = prompt("Please enter today's day");
switch(day1) {
    case 'Monday':
        console.log("Today is Monday");
        break;
    case 'Tuesday':
        console.log("Today is Tuesday");
        break;
    case 'Wednesday':
            console.log("Today is Wednesday");
            break;

    case 'Thrusday':
            console.log("Today is Thrusday");
            break;
    
    default: 
            console.log("Holiday"); 
        }