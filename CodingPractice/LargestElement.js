// WAP to print the largest element of an given array

let array = [45,78,96,25,36,78,15];


let largestElement = array.reduce((res, current) =>{
    if(res > current ){
        return res;
    } else{
        return current;
    }
})

console.log(largestElement); //OutPut : 96