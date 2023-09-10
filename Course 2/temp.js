let { PI } = Math;

console.log(PI);

// object.keys built in method
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']

// object.values built in method
const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']

// object.entries built in method
const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4));



var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

// for (key of Object.keys(clothingItem)) {
//     console.log(keys, ":", clothingItem[key])
// }


// dynamic function testing
function testBracketsDynamicAccess() {
    var dynamicKey;
    if (Math.random() > 0.5) {
        dynamicKey = "speed";
    } else {
        dynamicKey = "color";
    }

    var drone = {
        speed: 15,
        color: "orange"
    }

    console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess();

const [a, b] = [1, 2, 3, 4];
console.log(b);

const apple = "hi"


var x = 0 != 1;
console.log(typeof (x));