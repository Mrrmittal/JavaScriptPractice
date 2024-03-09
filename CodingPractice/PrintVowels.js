// WAP to count vowel in the given string

let fullName = "Jatin Mittal";


// By using normal funtion 
function countVowels(fullname){
    let count = 0;
    for(const char of fullName){
        if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' )
            count++;
    }
    console.log(`Total vowel in this fullName is : ${count}`);
}

// By using arrow function
const countVowels2 = (fullName) => {
    let count = 0;
    for(const char of fullName){
        if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' )
            count++;
    }
    console.log(`Total vowel in this fullName is : ${count}`);
}
countVowels(fullName);
countVowels2(fullName);