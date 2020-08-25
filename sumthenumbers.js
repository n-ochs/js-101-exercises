// Write a function sumNumbers which is given an array of numbers and returns the sum of the numbers.

function sumNumbers(bits = []) {
    const howMany = bits.length // setting a variable to determine how many numbers are in the array
    for(i = 0, whole = 0; i < howMany; whole += bits[i++]) {}
    console.log(whole);
}

sumNumbers([1, 4, 8])