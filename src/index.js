// module.exports = function solveSudoku(matrix) {
function solveSudoku(matrix) {

    // function verify(matrix) {
    //     let intermediate = [];

    //     let flagSquare = true;
    //     let flagLine = true;
    
    //     for (let i = 3; i <= matrix.length; i += 3) {
    //         for (let j = 3; j <= matrix.length; j += 3) {
                
    //             for (let k = i - 3; k < i; k++) {
    //                 for (let l = j - 3; l < j; l++) {
    
    //                     if (matrix[k][l] === 0) {
    //                         for (let n = 1; n < 10; n++) {
    //                             flagSquare = true;
    
    //                             for (let p = i - 3; p < i; p++) {
    //                                 for (let r = j - 3; r < j; r++) {
    //                                     if (matrix[p][r] === n) {
    //                                         flagSquare = false;
    //                                         break;
    //                                     }
    //                                 }
    //                             }
    
    //                             if (flagSquare) {
    //                                 flagLine = true;
    //                                 for (let z = 0; z < matrix.length; z++) {
    //                                     if (matrix[k][z] === n || matrix[z][l] === n) {
    //                                         flagLine = false;
    //                                         break;
    //                                     }
    //                                 }
    
    //                                 if (flagLine) {
    //                                     intermediate.push(n);
    //                                 }
    //                             }
    
    //                             if (intermediate.length === 1) {
    //                                 matrix[k][l] = intermediate[0];
    //                                 intermediate = [];
    //                             } else {
    //                                 intermediate = [];
    //                             }
    //                         } 
    //                     }
                        
    //                 }
    //             }
                
    //         }
    //     }

    //     for (let x = 0; x < matrix.length; x++) {
    //         for (let y = 0; y < matrix.length; y++) {
    //             if (matrix[x][y] === 0) {
    //                 verify(matrix);
    //             }
    //         }
    //     }
    // }

    // verify(matrix);


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

    function checkNumberInSquare(i, n) {
        for (let p = arrSquare[i][0]; p <= arrSquare[i][1]; p++) {
            for (let r = arrSquare[i][2]; r <= arrSquare[i][3]; r++) {
                if (matrix[p][r] === n) {
                    return false;
                }
            }
        }

        return true
    }

    function verify(matrix) {
        let intermediate = [];

        // let flagSquare = true;
        let flagSquareZero = false;
        // let flagLine = true;

        for (let n = 1; n < 10; n++) {

            for (let i = 0; i < arrSquare.length; i++) {
                if (checkNumberInSquare(i, n)) {

                    for (let p = arrSquare[i][0]; p <= arrSquare[i][1]; p++) {
                        for (let r = arrSquare[i][2]; r <= arrSquare[i][3]; r++) {
    
                            if (matrix[p][r] === 0) {
                                for (let z = 0; z < matrix.length; z++) {
                                    if (matrix[p][z] === n || matrix[z][r] === n) {
                                        flagSquareZero = false;
                                        break;
                                    } else {
                                        flagSquareZero = true;
                                    }
                                }
    
                                if (flagSquareZero) {
                                    intermediate.push([p, r]);
                                }
                            }
    
                            
                        }
                    }

                    if (intermediate.length === 1) {
                        matrix[intermediate[0][0]][intermediate[0][1]] = n;
                    }
                    intermediate = [];

                }
            }

        }

        // for (let j = 0; j < arrZero.length; j++) {
        //     for (let i = 0; i < arrSquare.length; i++) {
        //         if (arrZero[j][0] >= arrSquare[i][0] &&
        //             arrZero[j][0] <= arrSquare[i][1] &&
        //             arrZero[j][1] >= arrSquare[i][2] &&
        //             arrZero[j][1] <= arrSquare[i][3]) {
    
        //             for (let n = 1; n < 10; n++) {
        //                 flagSquare = true;
    
        //                 for (let p = arrSquare[i][0]; p <= arrSquare[i][1]; p++) {
        //                     for (let r = arrSquare[i][2]; r <= arrSquare[i][3]; r++) {
        //                         if (matrix[p][r] === n) {
        //                             flagSquare = false;
        //                             flagSquareZero = false;
        //                             break;
        //                         }

        //                         if (matrix[p][r] === 0 && (p !== arrZero[j][0] || r !== arrZero[j][1])) {
        //                             for (let z = 0; z < matrix.length; z++) {
        //                                 if (matrix[p][z] === n || matrix[z][r] === n) {
        //                                     flagSquareZero = false;
        //                                     break;
        //                                 } else {
        //                                     flagSquareZero = true;
        //                                 }
        //                             }
        //                         }
        //                     }
        //                 }

        //                 if (flagSquareZero) {
        //                     matrix[arrZero[j][0]][arrZero[j][1]] = n;
        //                     break;
        //                 }
    
        //                 if (flagSquare) {
        //                     flagLine = true;
        //                     for (let z = 0; z < matrix.length; z++) {
        //                         if (matrix[arrZero[j][0]][z] === n || matrix[z][arrZero[j][1]] === n) {
        //                             flagLine = false;
        //                             break;
        //                         }
        //                     }
    
        //                     if (flagLine) {
        //                         intermediate.push(n);
        //                     }
        //                 }
        //             }

        //             if (intermediate.length === 1) {
        //                 matrix[arrZero[j][0]][arrZero[j][1]] = intermediate[0];
        //                 // arrZero.splice(j, 1);
        //                 // j -= 1;
        //                 // copyArrZero.splice(index, 1);
        //                 intermediate = [];
        //             } else {
        //                 intermediate = [];
        //             }
        //         }
        //     }
        // }

        countZeros(matrix);

        // return matrix;
    }

    // countZeros(matrix);
    return verify(matrix);

    // return matrix;
}
