// WAP to print the square of each value by using the forEach Loop.

let digit = [1,2,3,4,5,6,7,8];
let output1 = [];

// By using forEach loop
digit.forEach((digit) =>{
    output1.push(digit * digit)
})

 console.log(output1);
// By using map funtion
let output =  digit.map((val) => {
        return val * val;
})
console.log(output);