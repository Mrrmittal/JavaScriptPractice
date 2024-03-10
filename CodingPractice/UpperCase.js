// WAP to convert city name by using callBack Function

let cities =["pune", "delhi", "jaipur", "mumbai"];


// By using normal callback function
cities.forEach(function uppercase(city){
    console.log(city.toUpperCase());
});

console.log();
    
// By using arrow callback funtion
cities.forEach((city)=>{
    console.log(city.toUpperCase());
});
