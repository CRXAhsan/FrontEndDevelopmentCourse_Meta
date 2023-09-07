// To make a new Map, you can use the Map constructor:
new Map();

// A map can feel very similar to an object in JS.
// However, it doesn't have inheritance. No prototypes! This makes it useful as a data storage.
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);

// To get a specific value, you need to use the get() method
bestBoxers.get(1); // 'The Champion'

// A set is a collection of unique values.
// To build a new set, you can use the Set constructor:

new Set();

// The Set constructor can, for example, accept an array.
// This means that we can use it to quickly filter an array for unique members.

const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);

let set = new Set();
set.add(1);
set.add(1);
set.add(2);
set.add(3);
set.add(4);
console.log(set);