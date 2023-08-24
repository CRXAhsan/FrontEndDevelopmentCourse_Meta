// Write a "for" loop that will perform exactly the same repetitive code as this:
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log('Counting completed!')

for (var i = 1; i <= 5; i++) {
    console.log(i);
}
console.log("Counting Completed");

// Write a "for" loop that will perform exactly the same repetitive code as this:
// console.log(5)
// console.log(4)
// console.log(3)
// console.log(2)
// console.log(1)
// console.log('Countdown finished!')

for (var i = 5; i >= 1; i--) {
    console.log(i);
}
console.log("Countdown Completed");


// Write a "while" loop that will perform exactly the same repetitive code as this:
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log('Counting completed!')

var i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
console.log('Countdown completed!')


// Write a "while" loop that will perform exactly the same repetitive code as this:
// console.log(5)
// console.log(4)
// console.log(3)
// console.log(2)
// console.log(1)
// console.log('Countdown finished!')

var i = 5;
while (i >= 1) {
    console.log(i);
    i--;
}
console.log('Counting completed!')

// Write a "while" loop that will perform exactly the same repetitive code as this:
// console.log(2018)
// console.log(2019)
// console.log(2020)
// console.log(2021)
// console.log(2022)

var i = 2018;
while (i <= 2023) {
    console.log(i);
    i++;
}


// try this code on browser so that dispaly results more beautuful
var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}


//Exercise 1

for (var i = 1; i <= 10; i++) {
    if (i == 1) {
        console.log("Gold Medal");
    }
    else if (i > 1 && i < 3) {
        console.log("Silver Medal");
    }
    else if (i == 3) {
        console.log("Bronze Medal");
    }
    else {
        console.log(i);
    }
}


//Exercise 2

for (var i = 1; i <= 10; i++) {
    switch (i) {
        case 1:
            console.log("Gold Medal");
            break;
        case 2:
            console.log("Silver Medal");
            break;
        case 3:
            console.log("Bronze Medal");
            break;
        default:
            console.log(i)
    }
}