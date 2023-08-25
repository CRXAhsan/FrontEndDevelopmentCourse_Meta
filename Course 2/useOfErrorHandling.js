// task 1
function addTwoNums(a,b){
    try
    {
        if(typeof(a) != 'number')
        {
            throw new ReferenceError('the first argument is not a number');
        }
        else if(typeof(b) != 'number')
        {
            throw new ReferenceError('the second argument is not a number');
        }
        else
        {
            console.log(a+b);
        }
    }
    catch(err) // err is the bulit in object for catching errors and we can make another variable we ant to catch
    {
        console.log("Error!",err);
    }
}
addTwoNums(5,"5");
console.log("It Still Works...");

// task 2

function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2;
    var condition2 = typeof(match) == 'string' && match.length == 1;
    if(condition1 == true && condition2 == true)
    {
        for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //if the current character at position i in the word is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
    }
    else
    {
        console.log("Please pass correct arguments to the function.");
    }
}

letterFinder("Cat", 'C');

