/*
Var: var is a global scope variable keyword. Variable can be re-declared & updated.
let: variable can not be re-declar but updated. local scope variable.
const: variable can not be re-declare and updated. local scope variable. Only use for store const value.
*/

var age = 20;
var age = 58;
var age = 98;
// var variable can be re-declare many times. So, its does not healthy programming. Not recommanded to use.

let num = 22;
// let num = 26; Cannot re-declare.
num = 26; // Yes, we can update

// let variables can be updated but can not declare again.

const pi = 3.14;
// pi = 22/7;  cannot re-declare and update.