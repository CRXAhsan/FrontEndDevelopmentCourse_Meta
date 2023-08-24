// Task 1:
// Write a function named letterFinder that accepts two parameters: word and match.

function letterFinder(word, match) {

    for (var i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log(`Match Found for ${match} on index ${i}`);
        }
        else{
            console.log(`Match Not Found for ${match} on index ${i}`);
        }
    }

}

letterFinder("Ahsan", "s");
