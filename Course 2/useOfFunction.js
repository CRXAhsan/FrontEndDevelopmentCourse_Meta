// Task 1:
// Write a function named letterFinder that accepts two parameters: word and match.

function letterFinder(word, match) {

    for (var i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log(`Match Found for ${match} on index ${i}`);
        }
        else {
            console.log(`Match Not Found for ${match} on index ${i}`);
        }
    }

}

letterFinder("Ahsan", "s");

function count (...basket){
    console.log(basket.length)
}
count(10,9,8,7,6);

function scopeTest()
{
    var y = 44;
    console.log(x);
}

var x = 33;
scopeTest();