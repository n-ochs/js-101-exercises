// Write a function positiveNumbers which is given an array of numbers and returns a new array containing only the positive numbers within the given array.

const someArray = [1, -3, 5, -3, 0];

function positives(someArray) {
    let newArray = [];
    for (i = 0; i < someArray.length; i++) {
        if(someArray[i] > 0) {
            newArray.push(someArray[i])
        }
    }
    console.log(newArray)
}

positives(someArray)