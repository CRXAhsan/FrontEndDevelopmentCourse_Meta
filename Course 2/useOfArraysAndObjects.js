var clothes = [];

clothes.push("Shirt");
clothes.push("Pants");
clothes.push("T-Shirt");
clothes.push("Belt");
clothes.push("Shorts");

clothes.pop();

clothes.push("Shoes");

console.log(clothes[3]);




var favCar = {}

favCar.color = " red";
favCar.convertible = false;

console.log(favCar);

const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach(function (key) {
    result.push(key, drone[key])
})
console.log(result)


//these are the three methods for array 
//1. foreach
//2. map
//3. nums

const fruits = ['kiwi', 'mango', 'apple', 'pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

const nums = [0, 10, 20, 30, 40, 50];
nums.filter(function (num) {
    return num > 20;
});

[0, 10, 20, 30, 40, 50].map(function (num) {
    return num / 10
});