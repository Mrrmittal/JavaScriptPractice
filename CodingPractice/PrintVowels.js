// WAP to count vowel in the given string

let fullName = "Jatin Mittal";
let count = 0;
function countVowels(fullname){
    for(const char of fullName){
        if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' )
            count++;
    }
    console.log(`Total vowel in this fullName is : ${count}`);
}
countVowels(fullName);