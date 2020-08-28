// Write a function matrixMultiply which is given two two-dimensional arrays - you can assume the matricies are of size 2x2. It will return the result of matrix multiplication between the two given matricies.

const matrix1 = {array1: [2, 4], array2: [3, 4]};
const matrix2 = {array3: [5, 2], array4: [3, 1]};

function matrixMultiply(matrix1, matrix2) {
    let result = [];
    let result2 = [];
    result.push((matrix1.array1[0] * matrix2.array3[0]) + (matrix1.array1[1] * matrix2.array4[0]));
    result.push((matrix1.array1[0] * matrix2.array3[1]) + (matrix1.array1[1] * matrix2.array4[1]));
    result2.push((matrix1.array2[0] * matrix2.array3[0]) + (matrix1.array2[1] * matrix2.array4[0]));
    result2.push((matrix1.array2[0] * matrix2.array3[1]) + (matrix1.array2[1] * matrix2.array4[1]));
    console.log(result, result2)
}

matrixMultiply(matrix1, matrix2)


/*
array1: 1, 3 | array3: 5, 2
array2: 2, 4 | array4: 3, 4
*/
