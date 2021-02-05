// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

// method one
function multiply(params) {
    return params*100
}
var multipliedNumbers = numbers.map(multiply);
console.log(`method 1: ${multipliedNumbers}`);

// method two
var numbersMultiplied2 = numbers.map(function multiplyBy100(number) {
  return number * 100;
});
console.log(`Method 2: ${numbersMultiplied2} `)

// mehod three
var numbersMultiplied3 = numbers.map(number => number * 100);
console.log(`Method 3: ${numbersMultiplied3} `)
