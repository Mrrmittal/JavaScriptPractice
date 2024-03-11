// WAP to check two objects in Java is Equal Or not


let arr1 = new Array(1,2,3,4,5);
let arr2 = new Array(1,2,3,4,5);


// Output will be NOT EQUAL By using === operator.
if(arr1 === arr2){
    console.log("EQUAL");
}
else{
    console.log("Not EQUAL");
}

function isEqual(obj1, obj2){
    isArrayEqual = JSON.stringify(arr1) === JSON.stringify(arr2);
    return isArrayEqual;
}

console.log(isEqual(arr1, arr2));