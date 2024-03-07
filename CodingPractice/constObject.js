// A const object value can be replace. But we can not change its datatypes Value

const dict = {
    "hello" : "Greetting in english",
    "yummy" : "tasty",
    "help" : "Help"
}

console.log(dict.yummy);
console.log(dict)
dict["hello"]="greet";
console.log(dict);