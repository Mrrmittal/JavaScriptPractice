// WAP to filer out student who scored 80+ by given student array?

let student = [97,85,48,52,75,48,25,96,78,89,97];

let filterStudent = student.filter((val) =>{
    if(val > 80){
        return val;
    }
})

console.log(filterStudent); // output : [ 97, 85, 96, 89, 97 ]