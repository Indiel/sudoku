module.exports = function solveSudoku(matrix) {
// function solveSudoku(matrix) {

    function verify(matrix) {
        let intermediate = [];

        let flagSquare = true;
        let flagLine = true;
    
        for (let i = 3; i <= matrix.length; i += 3) {
            for (let j = 3; j <= matrix.length; j += 3) {
                
                for (let k = i - 3; k < i; k++) {
                    for (let l = j - 3; l < j; l++) {
    
                        if (matrix[k][l] === 0) {
                            for (let n = 1; n < 10; n++) {
                                flagSquare = true;
    
                                for (let p = i - 3; p < i; p++) {
                                    for (let r = j - 3; r < j; r++) {
                                        if (matrix[p][r] === n) {
                                            flagSquare = false;
                                            break;
                                        }
                                    }
                                }
    
                                if (flagSquare) {
                                    flagLine = true;
                                    for (let z = 0; z < matrix.length; z++) {
                                        if (matrix[k][z] === n || matrix[z][l] === n) {
                                            flagLine = false;
                                            break;
                                        }
                                    }
    
                                    if (flagLine) {
                                        intermediate.push(n);
                                    }
                                }
    
                                if (intermediate.length === 1) {
                                    matrix[k][l] = intermediate[0];
                                    intermediate = [];
                                } else {
                                    intermediate = [];
                                }
                            } 
                        }
                        
                    }
                }
                
            }
        }

        for (let x = 0; x < matrix.length; x++) {
            for (let y = 0; y < matrix.length; y++) {
                if (matrix[x][y] === 0) {
                    verify(matrix);
                } else {
                    return matrix;
                }
            }
        }
        // return matrix;
    }

    return verify(matrix);


    // function countZeros(matrix) {
    //     let arrZero = [];
    //     for (let x = 0; x < matrix.length; x++) {
    //         for (let y = 0; y < matrix.length; y++) {
    //             if (matrix[x][y] === 0) {
    //                 arrZero.push([x, y]);
    //             }
    //         }
    //     }
        
    //     if (arrZero.length !== 0) {
    //         verify(arrZero);
    //     } else {
    //         return matrix;
    //     }
        
    // }

    

    let arrSquare = [
        [0, 2, 0, 2],
        [0, 2, 3, 5],
        [0, 2, 6, 8],
        [3, 5, 0, 2],
        [3, 5, 3, 5],
        [3, 5, 6, 8],
        [6, 8, 0, 2],
        [6, 8, 3, 5],
        [6, 8, 6, 8],
    ];

    function countZeros(matrix) {
        let counter = 0;
        for (let x = 0; x < matrix.length; x++) {
            for (let y = 0; y < matrix.length; y++) {
                if (matrix[x][y] === 0) {
                    counter++
                }
            }
        }
        
        if (counter > 0) {
            verify(matrix);
        } else {
            return matrix;
        }
        
    }

    function checkNumberInCell(square, possibleNumbers) {
        let possibleNumbersCell = [];
        let flagLine = true;

        for (let row = square[0]; row <= square[1]; row++) {
            for (let col = square[2]; col <= square[3]; col++) {
                possibleNumbersCell = [];

                if (matrix[row][col] === 0) {
                    for (let i = 0; i < possibleNumbers.length; i++) {
                        for (let z = 0; z < matrix.length; z++) {
                            if (matrix[row][z] === possibleNumbers[i] || matrix[z][col] === possibleNumbers[i]) {
                                flagLine = false;
                                break;
                            } else {
                                flagLine = true;
                            }
                        }

                        if (flagLine) {
                            possibleNumbersCell.push(possibleNumbers[i]);
                        }
                    }

                    if (possibleNumbersCell.length === 1) {
                        matrix[row][col] = possibleNumbersCell[0];

                        possibleNumbers.splice(possibleNumbers.indexOf(possibleNumbersCell[0]), 1);
                    }
                }
                
            }
        }

    }

    function checkNumberInSquare(square) {
        let possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        for (let row = square[0]; row <= square[1]; row++) {
            for (let col = square[2]; col <= square[3]; col++) {

                if (matrix[row][col] !== 0) {
                    possibleNumbers.splice(possibleNumbers.indexOf(matrix[row][col]), 1);
                }

            }
        }

        return possibleNumbers;
    }

    // function verify(matrix) {
    //     let intermediate = [];

    //     let flagSquare = true;

    //     let square;

    //     for (let i = 0; i < arrSquare.length; i++) {
    //         square = arrSquare[i];

    //         let possibleNumbers = checkNumberInSquare(square);

    //         if (possibleNumbers.length !== 0) {
    //             checkNumberInCell(square, possibleNumbers);

    //             if (possibleNumbers.length !== 0) {
    //                 for (let i = 0; i < possibleNumbers.length; i++) {

    //                     for (let row = square[0]; row <= square[1]; row++) {
    //                         for (let col = square[2]; col <= square[3]; col++) {

    //                             if (matrix[row][col] === 0) {
    //                                 for (let z = 0; z < matrix.length; z++) {
    //                                     if (matrix[row][z] === possibleNumbers[i] || matrix[z][col] === possibleNumbers[i]) {
    //                                         flagSquare = false;
    //                                         break;
    //                                     } else {
    //                                         flagSquare = true;
    //                                     }
    //                                 }
        
    //                                 if (flagSquare) {
    //                                     intermediate.push([row, col]);
    //                                 }
    //                             }
                                
    //                         }
    //                     }

    //                     if (intermediate.length === 1) {
    //                         matrix[intermediate[0][0]][intermediate[0][1]] = possibleNumbers[i];
    //                     }
    //                     intermediate = [];
    //                 }
    //             }
    //         }
    //     }

    //     countZeros(matrix)

    //     // return matrix;
    // }

    
    // return verify(matrix);
}
