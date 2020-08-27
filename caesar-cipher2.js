// Write a function decipher which is given a string, an offset, and returns the original message.

function decipher(someString, offset) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let newString = ''
    for(i = 0; i < someString.length; i++) {
        const preLetter = someString.charAt(i);
        const indexLetter = alphabet.indexOf(preLetter);
        let offsetIndex = indexLetter - offset;
        if(preLetter == " ") {
            newString += " ";
            continue;
        }
        if (preLetter == ".") {
            newString += ".";
            continue;
        }
        if(offsetIndex <= 0) {
            offsetIndex = Math.abs(offsetIndex + alphabet.length); //somethings not right here.
            if(offsetIndex > 26) {
                offsetIndex = offsetIndex%alphabet.length
            }
        }
        newString += alphabet.charAt(offsetIndex)
    }
    console.log(newString)
    
}

decipher('yjxy ymnx.', 5)