function scalarMultiplication(matrix, multiplier) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] *= multiplier;
        }
    }
    console.log(matrix);
}
scalarMultiplication([[11, 0, 13], [23, 2, 6], [9, 1, 0]], 7);