// WAP uses reduce() method to return the round sum of all array elements

let arr = [1.5, 6.7, 8.9, 1.2];

let output = arr.reduce((res, num) => {
    let sum = res + num;
    return Math.round(sum);
})

console.log(output);