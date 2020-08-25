// Write a function cipher which is given a string, an offset, and returns the Caesar cipher of the string.

//thoughts: make a for loop to find the index of each character in the string and then somehow replace it with another character

function cipher(someString, offset) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let newString = ''
    for(i = 0; i < someString.length; i++) {
        const preLetter = someString.charAt(i);
        const indexLetter = alphabet.indexOf(preLetter);
        const offsetIndex = indexLetter + offset;
        if(offsetIndex > alphabet.length) {
            offsetIndex = offsetIndex%alphabet.length
        }
        newString += alphabet.charAt(offsetIndex)
    }
    console.log(newString)
    
}

cipher('test', 5)

//make a conditional to handle spaces and periods ... make a conditional to check if the character is within my alphabet... if it is not, then just write character. if it is, then proceed with normal for loop above.