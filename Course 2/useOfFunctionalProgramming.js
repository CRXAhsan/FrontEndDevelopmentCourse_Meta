// function totalSum(a, b) {
//     return a + b;
// }
// let num1 = 4;
// let num2 = 6;
// console.log(totalSum(num1, num2));



// first class function

function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if (useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}



function addTwoNums(getNumber1, getNumber2) {
    console.log(getNumber1() + getNumber2());
}

console.log(addTwoNums(getNumber(), getNumber()));