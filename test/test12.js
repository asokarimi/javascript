var assert = require('assert');
// task1
  describe('ucFirst', function() {
    it('Enlarging the first letter', function() { 
      assert.strictEqual(ucFirst("john"), "John");
    });
  });

function ucFirst(input) {
  return input[0].toUpperCase() + input.substr(1, input.length);
}

// task2
describe('truncate', function() {
  it('truncate to 20 characters', function() {
    assert.strictEqual(truncate("what I'd like to tell on this", 20), "what I'd like to te...");
  });

  it("doesn't change the input string if it's length is less than 20", () => {
    assert.strictEqual(truncate("Hello there!", 20), "Hello there!");
  });

  it("truncates input string in 5 letters", () => {
    assert.strictEqual(truncate("Hello there!", 5), "Hello...");
  });
});


function truncate(string, num) { // you've defined num but never used it. it always truncate by 20
  let first = string.slice(0, 19);

  if (string.length > 20) {
    first += "...";
  }
  return first;
}
// task3
describe('extractCurrencyValue', function() {
  it('Return the number', function() {
    assert.strictEqual(extractCurrencyValue("$123"), 123);
  });
});

function extractCurrencyValue(string) {
  let num = "";

  main : for (let i = 0; i < string.length; i++) {
   let number = Number(string[i]);
    if ( isNaN(number) ) {
      continue main;
    }
    num += string[i];
  }
  return Number(num);
}


// task5
describe('getMaxSubSum', function() {
  it('Get the biggest amount', function() {
    assert.strictEqual(getMaxSubSum([-1, 2, 3, -4]), 5);
  });
  it("Get the max sum sequence for [2, -1, 2, 1, -4]", () => {
    assert.strictEqual(getMaxSubSum([2, -1, 2, 1, -4]), 4);
  });
});

function getMaxSubSum(input) {
  let sum = 0;
  let sum2 = 0;
  let array = [];
  let length = input.length;

  if (length == 1){
    return input[0];
  } 
  for (let i = 0; i < input.length; i++) {
    if (input[i] < 0) {
      if (i == (length -1)) {
        return 0;
      } else {
        continue;
      }
    } else {
      for (let i = 1; i < length; i++) {
        sum = input[i]+input[i-1];
        array.push(input[i]+input[i-1])
      }
      if (length > 2) {
        sum2 = input[0] + input[1];   
        for (let j = 2; j < length; j++) {
          sum2 +=input[j] ; 
          array.push(sum2);
        }
      }
      for (let i = 0; i < array.length; i++) {
        input.push(array[i]);
      }
      return Math.max(...input);
    }
  }
}


