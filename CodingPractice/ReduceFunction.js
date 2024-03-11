/*
Que: What is reduceFunction in javaScript?
Sol: The Javascript arr.reduce() method in JavaScript is used to reduce the array to a single value
     and executes a provided function for each value of the array (from left to right) and the return
     value of the function is stored in an accumulator.
     */

//  we will write a reduce function to simply print the difference of the elements of the array.

     let num = [677,90,34,23];

     let output = num.reduce((res, current) => {
        return res - current;
     })

     console.log(output);