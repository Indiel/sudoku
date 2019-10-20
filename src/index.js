module.exports = function solveSudoku(matrix) {

    function isValid(matrix, row, col, number) {
        for (let i = 0; i < matrix.length; i++) {
            const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
            const n = 3 * Math.floor(col / 3) + i % 3;
            if (matrix[row][i] == number || matrix[i][col] == number || matrix[m][n] == number) {
                return false;
            }
        }
        return true;
    }

    function verify(matrix) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix.length; col++) {
                if (matrix[row][col] == 0) {
                    for (let number = 1; number <= 9; number++) {
                        if (isValid(matrix, row, col, number)) {
                            matrix[row][col] = number;
                            if (verify(matrix)) {
                                return true;
                            } else {
                                matrix[row][col] = 0;
                            }
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

    verify(matrix);
    return matrix;
}
