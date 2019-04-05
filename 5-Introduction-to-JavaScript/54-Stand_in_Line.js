// I was previously familiar with queues and mutability of arrays.

function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  var newItem = arr.shift();
  return newItem;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
