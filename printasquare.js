// Write a function printSquare which is given a size and prints a square of that size using asterisks.

// USING A REPEAT FUNCTION
// function printSquare(size) {
//     for (var i = 1; i <= size; i++) {
//                 console.log('*'.repeat(size))
//     }
//     }
// printSquare(5)




// USING NESTED FOR LOOPS
function printSquare(size) {
    for (var i = 1; i <= size; i++) {
        for (var j = 1; j <= size; j++) {
            process.stdout.write("*");
        }
        console.log();
    }
}
printSquare(5)

//Ron's live code way

// function printSqr(aNum) {
//     let myString = "";
//     for (let i = 0; i < aNum; i++) {
//         myString += "*";
//     }
//     for (let j = 0; j < aNum; j++) {
//         console.log(myString);
//     }
// }

// printSqr(5)