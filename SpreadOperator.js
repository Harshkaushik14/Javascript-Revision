// SpreadOperator
//ES6

//Example As an Array

var names = ["Harsh" , "YourName" , "OtherGuyNamme", "vijay" , "dhoni"];

function getNames(name1 , name2 ){
console.log(name1 , name2 );
}
//getNames(names[0],names[1], names[2]); // We have to pass forcefully in it 

getNames(...names);// We don't have to pass forcefully  init

//getNames(names);// for getting as an array.

//What is Spread Operator

//The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.


//With Object.


var student={
    name:"Harsh",
    age:"21",
    hobbies: ["coding" , "chess" ]
}
// const {...rest} = student; 
// console.log(rest);


// Example of overriding 
const newStudent={
...student,
name:"Ajay",
age: "22"

}
const {...spread} = student; 
console.log(newStudent);