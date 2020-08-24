// Write function printBox which is given a width and height and prints a hollow box of those given dimensions.


// this function will print a box with the width and height as variables, however it is not a hollow box. I am saving this because it could come in handy later.

// function printBox(width, height) {
// for (i = 1; i <= height; i++) {
//     for (j = 1; j <= width; j++) {
//         process.stdout.write("*");
//     }
//     console.log();
// }
// }

// printBox(6, 4)



// this is a work in progress.

function printBox(width, height) {
    for (i = 1; i <= height; i++) {
        if(i <= 1) { //top row
            for (j = 1; j <= width; j++) {
                process.stdout.write("*");
            }
            console.log()
        }
        else if(i > 1 && i < height) { //hollow inside. this part is incomplete.
        console.log("test")
        }
        else { //bottom row
            for (j = 1; j <= width; j++) {
                process.stdout.write("*");
            }
            console.log()
        }
    }
}
    
printBox(6, 4)