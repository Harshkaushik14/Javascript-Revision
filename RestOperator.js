// RestOperator
//ES6
function addNumber(a, b, c, ...others) {
  // Here others is working as Rest Operator
  console.log(others);
  return a + b + c;
}
const result = addNumber(2, 4, 5, 6, 8);

console.log(result);

// What is a rest operator?
//The rest operator (…) allows us to call a function with any number of arguments and then access those excess arguments as an array. The rest operator also allows us in destructuring array or objects!
//Rest Operator combines the supplied numbers which are left at the time of call


// With Object


var student={
    name:"Harsh",
    age:"21",
    hobbies: ["coding" , "chess" ]
}
 // const age = student.age; Old way of doing
 const {...rest} = student; // New Way of Array Destructuring ||  The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
 console.log(rest);

