var assert = require('assert');

// camelize
  describe('camelize', function() {
    it('Removal - from the phrase background-color', function() { 
      assert.strictEqual(camelize("background-color"), "backgroundColor");
    });
    it('Removal - from the phrase -background-color', function() { 
      assert.strictEqual(camelize("-background-color"), "BackgroundColor");
    });

    it('Changes -webkit-tranition-delay to WebkitTransitionDelay', () => {
      assert.strictEqual(camelize('-webkit-transition-delay'), 'WebkitTransitionDelay');
    });
  });

function camelize(string) {
  let str = string.split("-");
  let first = str.splice(0, 1);
  let upper = str.map(function(value){
    let first = value.charAt(0).toUpperCase();
    let word = value.slice(1, value.length);
    return first.concat(word);
 });
 return first.concat(upper).join("");
}

// filterRange
describe('filterRange', function() {
  it('The numbers are between 1 and 4', function() {
    assert.strictEqual(filterRange([1, 3, 5, 4, 6], 1, 4), [1, 3, 4]);
  });
});

function filterRange(arr, num1, num2) {
  return arr.filter(value => (value >= num1) && (value <= num2));
}

// filterRangeInplace
describe('filterRangeInplace', function() {
  it('Delete numbers between 1 and 4 ', function() {
    assert.strictEqual(filterRangeInplace([1, 2, 3, 5, 4, 6], 1, 4), [1, 2, 3,4]);
  });
});

function filterRangeInplace(arr, num1, num2) {
  let arr1 = arr.filter(value => (value >= num1) && (value <= num2));
  arr.sort((a, b) => a - b);
  arr.splice(arr1.length,arr.length );
  return  arr; 
}

// arrreverse
describe('arrreverse', function() {
  it('Reverse array [2, 5, 7, 9, 1]', function() {
    assert.strictEqual(arrreverse([2, 5, 7, 9]), [9, 7, 5, 2, 1]);
  });
});

function arrreverse(arr) {
  return arr.sort((a, b) => b-a);
}

// copySorted
describe('copySorted', function() {
  it('sort array ["Html", "JavaScript", "Css"]', function() {
    assert.strictEqual(arrreverse(["Html", "JavaScript", "Css"]), ["Css", "Html", "JavaScript"]);
  });
});

function copySorted(arr) {
  let arr1  = arr.slice();
  return arr1.sort();
}

// sortByname
describe('sortByname', function() { 
  let John = {name: "John", age: 25};
  let Pete = {name: "Pete", age: 30};
  let Mary = {name: "Mary", age: 28};
  let arr = [John, Pete, Mary];
  let arr1 = sortByName(arr);
  it('sort array by name', function() {
    assert.strictEqual(arr1[1].name, "Mary" );
  });
});

function sortByName(arr) {
  return arr.sort((a, b) =>  (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
}

// getAvergeAge
describe('getAvergeAge', function() { 
  let John = {name: "John", age: 25};
  let Pete = {name: "Pete", age: 30};
  let Mary = {name: "Mary", age: 28};
  let arr = [John, Pete, Mary];

  it('get Averge Age arr', function() {
    assert.strictEqual(getAvergeAge(arr), 83 );
  });
});

function getAvergeAge(arr) {
  return arr.map(value => value.age).reduce((sum, current, index) => sum + current , 0); 
}

// uniqe
describe('uniqe', function() { 

  let string = ["Hare", "Kreshna", "Hare", "Kreshna", "Kreshna", "Kreshna", "Hare", "Hare", ":-o"];

  it('get Averge Age arr', function() {
    assert.strictEqual(uniqe(string), ["Hare", "Kreshna", ":-o"]);
  });
});


function uniqe(string) {
  return string.filter( (value, index, string) => string.indexOf(value) === index);  
}