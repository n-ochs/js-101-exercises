// Write a function cipher which is given a string, an offset, and returns the Caesar cipher of the string.

//thoughts: make a for loop to find the index of each character in the string and then somehow replace it with another character

function cipher(someString, offset) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let newString = ''
    for(i = 0; i < someString.length; i++) {
        const preLetter = someString.charAt(i);
        const indexLetter = alphabet.indexOf(preLetter);
        let offsetIndex = indexLetter + offset;
        if(preLetter == " ") {
            newString += " ";
            continue;
        }
        if (preLetter == ".") {
            newString += ".";
            continue;
        }
        if(offsetIndex > alphabet.length) {
            offsetIndex = offsetIndex%alphabet.length;
        }
        newString += alphabet.charAt(offsetIndex)
    }
    console.log(newString)
    
}

cipher('test this.', 5)