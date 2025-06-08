function setMatrixZero(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    const othArr = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                othArr.push([i, j]);
            }
        }
    }
    while (othArr.length > 0) {
        const [i, j] = othArr.pop();
        for (let k = 0; k < m ; k++) {
            matrix[k][j] = 0;
        }
        for (let l = 0; l < n; l++) {
            matrix[i][l] = 0;
        }
    }

    return matrix;
}

console.log(setMatrixZero([[0,1,2,0],[3,4,5,2],[1,3,1,5]]));
console.log(setMatrixZero([[1,1,1],[1,0,1],[1,1,1]]));