// Task 1: Using the logical && operator
var score = 8;
console.log("Mid-Level Skills:", (score > 0 && score < 10));

// Task 2: Using the logical || operator
var timeRemaining = 0;
var energy = 10;
console.log("Game Over: ", (timeRemaining == 0 || energy == 0));

// Task 3: Using the modulus operator, %, to test if a given number is odd
var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;
console.log("Is", num1, "an even number?", result1);
console.log(`Is ${num2} an even number? ${result2}`);

// Task 4: Add numbers using the + operator
console.log("adding two numbers", 5 + 10);

// Task 5: Concatenate numbers and strings using the + operator
var now = "Now in ";
var three = 3;
var d = "D!";
console.log(now + three + d);


// Task 6: Use the += operator to accumulate values in a variable
var counter = 0;
counter += 5;
counter += 3;
console.log('Counter Value is: ', counter);




var globalVar = 77;

function scopeTest() {
    var localVar = 88;
}

console.log(localVar);
