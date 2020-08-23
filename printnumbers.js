// Write a function printNumbers which is given a start number and an end number. It will print the numbers from one to the other, one per line:

// FOR LOOP FUNCTION
function printNumbers1(num1, num2) {
    for (var i = num1; i <= num2; i++) {
    console.log(i)
    }
}

printNumbers1(1, 10)


// // WHILE LOOP FUNCTION
function printNumbers2(num1, num2) {
    let i = num1;
while(i <= num2) {
    console.log(i);
    i++;
}
}

printNumbers2(1, 10)