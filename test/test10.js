var assert = require('assert');
// task1
  describe('calculator', function() {
    let calculator = new Calculator(); 
    it('read a number from the input', function() {
      calculator.read(9);
      assert.strictEqual(calculator.num, 9)
    });
    it('should add 2 to the previous number', function() {
      calculator.sum(9);
      assert.strictEqual(calculator.num, 18)
    });
    it('should multipy 2 to the previous number', function() {
      calculator.mul(9);
      assert.strictEqual(calculator.num, 162)
    });
  });

function Calculator() {
  this.num = 0;
  this.read = function(num) {
    this.num = num;
  };
  this.sum = function(num) {
    return this.num += num;
  };
  this.mul = function(num) {
    return this.num *= num;
  };
}
// task2
describe('Accumulator', function() {
  let  accumulator = new Accumulator(1);
  it('read a number from the input', function() {
    accumulator.read(9);
    assert.strictEqual(accumulator.num, 9)
  });
  it('should add 2 to the previous number', function() {
    accumulator.value;
    assert.strictEqual(accumulator.value, 10)
  });
});

function Accumulator(num) {
  this.number = {
    num: num
  };
  this.num = 0;
  this.value ;

  this.read = function(num) {
    this.num = num;
    this.number[this.num] = this.num;
    this.value= 0;
    for (let prop in this.number) {
      this.value += this.number[prop];
    }
  }; 
}