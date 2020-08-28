// Write a function, which is given a string, return the result of extending any long vowels to the length of 5.

let someString = 'Cheese'

function longLongVowels(someString) {
    let newWord = ''
    for (i = 0; i < someString.length; i++) {
        if(someString.charAt(i) + someString.charAt(i+1) == 'aa') {
            newWord += 'aaa';
        }
        if(someString.charAt(i) + someString.charAt(i+1) == 'ee') {
            newWord += 'eee';
        }
        if(someString.charAt(i) + someString.charAt(i+1) == 'ii') {
            newWord += 'iii';
        }
        if(someString.charAt(i) + someString.charAt(i+1) == 'oo') {
            newWord += 'ooo';
        }
        if(someString.charAt(i) + someString.charAt(i+1) == 'uu') {
            newWord += 'uuu';
        }
        else {
            newWord += someString.charAt(i);
        }
    }
    return newWord;
}

console.log(longLongVowels('Good'));
console.log(longLongVowels('Cheese'));
console.log(longLongVowels('Man'));