// Write a function leetspeak which is given a string, and returns the leetspeak equivalent of the string. To convert text to its leetspeak version, make the following substitutions:

// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7

function leetspeak(someString) {
let leetString = ''
    for(i = 0; i < someString.length; i++) {
        if(someString.charAt(i) == "a") {
            leetString += "4"
        }
        else if(someString.charAt(i) == "e") {
            leetString += "3"
        }
        else if(someString.charAt(i) == "g") {
            leetString += "6"
        }
        else if(someString.charAt(i) == "i") {
            leetString += "1"
        }
        else if(someString.charAt(i) == "o") {
            leetString += "0"
        }
        else if(someString.charAt(i) == "s") {
            leetString += "5"
        }
        else if(someString.charAt(i) == "t") {
            leetString += "7"
        }
        else {
            leetString += someString.charAt(i)
        }
    }
    console.log(leetString)
}

leetspeak("leet")