// WAP to print the square of each value by using the forEach Loop.

let digit = [1,2,3,4,5,6,7,8];
let output = [];

digit.forEach((val) => {
        output.push(val*val);
})
console.log(output);