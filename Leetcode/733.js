var floodFill = function(image, sr, sc, color) {
    let row = image.length;
    let col = image[0].length;
    let originalColor = image[sr][sc]; // Store BEFORE modifying!
    
    // Early exit if same color (prevents infinite loop)
    if (originalColor === color) return image;
    
    let queue = [[sr, sc]];
    let directions = [
        [-1, 0], // up
        [1, 0], // down
        [0, -1], // left
        [0, 1] // right
    ];
    
    while (queue.length > 0) {
        let [x, y] = queue.shift();
        if (x < 0 || x >= row || y < 0 || y >= col) continue;
        if (image[x][y] !== originalColor) continue;
        image[x][y] = color;
        for (let [dx, dy] of directions) {
            queue.push([x + dx, y + dy]);
        }
    }
    return image;
};

console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2));
