"use strict"

let user = {};

user.name = "John";
user.surname = "smith";
delete user.name;

// task2
let schedule = {};

function isEmpty(schedule) {
  for (let prop in schedule) {
      return false;
    }  
      return true;
}
// task3
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

function addProp(salaries) {
  let s = 0;
  for (let prop in salaries) {
    if ( (typeof salaries[prop]) === "number") {
      s += salaries[prop];
    }
  } 
  return s;
}

// task 4
let menu = {
  width: 200,
  height: 300,
  title: "my menu"
};

function multiplyNumeric(menu) {
  let number = "number";
  for (let prop in menu) {
    if ( (typeof menu[prop]) === number) {
      menu[prop] = menu[prop]*2;
    }
  } 
  return menu;
}
