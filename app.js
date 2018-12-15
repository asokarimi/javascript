"use strict"

// Session exercises 10
let loddaer = {
  step : 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() {
    alert(this.step);
  }
};

console.log(loddaer.up().up().down().showStep());

// Session exercises 11
let num1 = Number(prompt("enter a number"));
let num2 = Number(prompt("enter a number"));

alert(num2 + num1);

// task2
let number = {};
let sum = 0;
let num = 0;

function readNumber() {
  do {
    num = +prompt("enter a number");
    number[num] = num;
  } while(num) 
  for (let prop in number) {
    sum += number[prop];
  }
  return sum;
}

alert(readNumber());

// task3
function random1(num1, num2) {
  let number = 0;

  return number = num1 + Math.random() * (num2 -1);  
}
console.log(random1(1, 5));

// task4
function random1(num1, num2) {
  let number = 0;
  
  number = num1 +  Math.random() * (num2 -1);
  return  parseInt(number);
}
console.log(random1(1, 5));

// Session exercises 12
let styles = ["jaz", "Blues"];
styles.push("Rock-n-Roll");

function center(input) {
 return Math.floor((input.length/2));
}
styles[center(styles)] = "Calssic";
console.log(styles);