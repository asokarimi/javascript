"use strict"
// task11
let operator = [];
let func = [];

function Calculator() {
  this.addMethod = function(input1, input2) {
    operator.push(input1);
    func.push(input2);
  }
  this.calculator = function(input) {
    let result= 0;

    for (let i = 0; i< input.length; i++) {
      if (operator.includes(input[i])) { 
        let a = Number(input[i-1]);
        let b = Number(input[i+1]);
         result = func[operator.indexOf(input[i])];
         return result(a,b);
      }

    }
  }
}
let calc = new Calculator;
let powerCal = new Calculator;
powerCal.addMethod("*", (a, b) => a * b);
console.log(calc.calculator("2*4"));


// task2
let John = {name: "John", age: 25};
let Pete = {name: "Pete", age: 30};
let Mary = {name: "Mary", age: 28};
let users = [John, Pete, Mary];
let names = users.map(value => value.name).join(", ");

console.log(names);

// task3
let John = {name: "John", surname: "Smit", id:1};
let Pete = {name: "Pete", surname: "Hunt", id: 2};
let Mary = {name: "Mary", surname: "Key", id:3};
let users = [John, Pete, Mary];

let names = users.map(function(value) {
  let arr = {};
  arr.fullname = value.name + " " + value.surname;
  arr.id = value.id;
  return arr;
});

console.log(names);