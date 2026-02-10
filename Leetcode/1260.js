var shiftGrid = function(grid, k) {
    const m = grid.length;
    const n = grid[0].length;
    const total = m * n;

    k = k % total;

    if (k === 0) return grid;

    const flat = grid.flat();
    const rotated = [...flat.slice(total - k), ...flat.slice(0, total - k)];
    const result = [];
    for (let i = 0; i < m; i++) {
        result.push(rotated.slice(i * n, (i + 1) * n));
    }

    return result;
};

console.log(shiftGrid([[1,2 ,3],[4,5,6],[7,8,9]], 1));