function rotateImageBy90(matrix) {
    let m = matrix.length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]]  = [matrix[j][i], matrix[i][j]];
        }
    }
    for (let i = 0; i < matrix.length; i++) {
       matrix[i].reverse();
    }
    return matrix;
}

console.log(rotateImageBy90([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]));