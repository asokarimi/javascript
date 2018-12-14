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

