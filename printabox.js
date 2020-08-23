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



// THIS FUNCTION WILL PRINT A HOLLOW BOX

function printBox(width, height) {
for (i = 1; i < 2; i++) { //this is for the top line
    for (j = 1; j <= width; j++) {
        process.stdout.write("*");
    }
    console.log();
    for (i = 1; i < height - 1; i++) { //this is for the "hollow" inside rows
        for (j = 1; j < 2; j++) {
            process.stdout.write("*");
        }
        for (j = 1; j <= width - 2; j++) { //for some reason, my ending was always off by two characters, so i did -2
            process.stdout.write(" ");
        }
        for (j = 1; j < 2; j++) {
            process.stdout.write("*")
        }
        console.log();
    }
    for (i = 1; i < 2; i++) { //this is for the bottom row
        for (j = 1; j <=width; j++) {
            process.stdout.write("*")
        }
        console.log();
    }
}
}

printBox(6, 4)
