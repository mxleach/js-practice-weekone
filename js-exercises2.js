// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
function max(a,b) {
    if a > b {
    return a;
    } else {
        return b;
        }
    }

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
function maxOfThree(a,b,c) {
    if (a>b && a>c) {
        return a;
    } else if (b>a && b>c) {
        return b;
    } else if (c>a && c>b) {
        return c;
    }
}


// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function vowelDetect(is) {
    if (is === `a` || is === `e` || is ===`i` || is===`o` || is===`u`){
        return true;
    } else {
        return false;
    }
}
// vowelDetect(`e`);


// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket".
//That is, double every consonant and place an occurrence of "o" in between.
//For example, translate("this is fun") should return the string "tothohisos isos fofunon".
function translate()


// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively)
//all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10,
// and multiply([1,2,3,4]) should return 24.
function sum([a,b,c,d]) {
    let total = 0;
    for (let i = 0; i < [a,b,c,d].length; i++) {
        total += [a,b,c,d][i];
    }
    return total;
}

function multiply([a,b,c,d]) {
    let total = 1;
    for (let i=0; i < [a,b,c,d].length; i++) {
        total =  total*[a,b,c,d] [i]
    }
    return total;
}


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
function reverse(text) {
    let words = " "
    for (let i = text.length-1; i>= 0; i--)
    {
        words += text[i];
    }
    return words;
}
reverse(`hey`)

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
function findLongestWord([a,b,c,d]) {
    let longest = " ";
    for (let i =0, i < [a,b,c,d].length; i++) {
        if ([a,b,c,d],length > longest) {
            let longest = [a,b,c,d][0].length;
            longest >= [a,b,c,d][i];
        }
        return longest;
    }
}
findLongestWord([`hi,hey,hello`]);

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words
//that are longer than i.
function filterLongWords(array,i) {
    return array.filter(array => array.length > i);
}
filterLongestWords([`hi`,`howdy`,`hello`,`yo`,`topofthemorning`],4)


// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it.
//Represent the frequency listing as a Javascript object.
//Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
function charFreq( )



