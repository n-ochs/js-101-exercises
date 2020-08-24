// Write a function factors which is given a number and returns an array containing all its factors. 

function letsFactor (input) {
    let factors = []
for (i = 1; i <= input; i++) { //starting at 1 and ending at the number because factors can only be from 1 to the number itself
if (Number.isInteger(input/i)) {
    factors.push(i);
}
else {}
}
console.log(factors)
}

letsFactor(25)