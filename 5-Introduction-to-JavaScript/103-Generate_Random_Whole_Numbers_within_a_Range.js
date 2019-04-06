// I was previously familiar with returning random numbers within a range by manipulating Math.random()'s return value.'

// Example
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {

  return Math.floor(myMin + Math.random() * (myMax - myMin + 1)); // Change this line

}

// Change these values to test your function
var myRandom = randomRange(5, 15);
