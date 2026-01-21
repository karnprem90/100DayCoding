var imageSmoother = function(img) {
    let directions = [
        [-1, -1], [-1, 0], [-1, 1], // top-left, top, top-right
        [0, -1], [0, 0], [0, 1], // left, center, right
        [1, -1], [1, 0], [1, 1] // bottom-left, bottom, bottom-right
    ];

    let row = img.length;
    let col = img[0].length;
    let newImg = new Array(row).fill(0).map(() => new Array(col).fill(0));
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            let sum = 0;
            let count = 0;
            for (let k = 0; k < directions.length; k++) {
                let newRow = i + directions[k][0];
                let newCol = j + directions[k][1];
                if (newRow >= 0 && newRow < row && newCol >= 0 && newCol < col) {
                    sum += img[newRow][newCol];
                    count++;
                }
            }
            newImg[i][j] = count === 0 ? img[i][j] : Math.floor(sum / count);
        }
    }
    return newImg;
};

console.log(imageSmoother([[100,200,100],[200,50,200],[100,200,100]]))    