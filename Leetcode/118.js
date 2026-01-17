var generate = function(numRows) {
    let num = [[1]];
    if (numRows === 1) {
        return num;
    }
    if (numRows === 2) {
        return [[1], [1, 1]];
    }
    let rows = [[1], [1, 1]];
    let result = [1, 1]

    while (numRows - 2) {
        let row = [1];
        let sum = 0;
        for (let i = 0; i < result.length - 1; i++) {
            sum = result[i] + result[i + 1];
            row.push(sum);
        }
    row.push(1);
        result = row;
        rows.push(row);
        numRows--;
    }
    return rows;
};
console.log(generate(5));
