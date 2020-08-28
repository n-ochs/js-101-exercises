// Write a function matrixAdd which is given two two-dimensional arrays, and returns a new two-dimensional array containing their matrix sum.

const matrix1 = {array1: [1, 3], array2:[2, 4]};
const matrix2 = {array3: [5, 2], array4: [1, 0]};

function matrixAdd(matrix1, matrix2) {
    let answer = [];
    let answer2 = [];
    answer.push(matrix1.array1[0] + matrix2.array3[0]);
    answer.push(matrix1.array1[1] + matrix2.array3[1]);
    answer2.push(matrix1.array2[0] + matrix2.array4[0]);
    answer2.push(matrix1.array2[1] + matrix2.array4[1]);
    console.log(answer, answer2)
}

matrixAdd(matrix1, matrix2)
