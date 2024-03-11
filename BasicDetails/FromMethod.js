/*
Que: What is Array from() method in JavaScript? 
Sol: The JavaScript Array from() method returns an Array object from any object with a length
     property or an iterable object. 

     Basically Array.from() method help to convert an object on an array into a array object
*/

let array = ["Jatin", "Mittal"]
let newArray = Array.from(array[1]);

// Output : [ 'M', 'i', 't', 't', 'a', 'l' ];
console.log(newArray); 