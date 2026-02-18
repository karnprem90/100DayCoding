/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let result = [];
    let board = Array.from({ length: n }, () => Array(n).fill('.'));

    // Optimization: Use Sets for O(1) lookups
    let cols = new Set();
    let posDiag = new Set(); // ID: row + col
    let negDiag = new Set(); // ID: row - col

    function backtrack(row) {
        if (row === n) {
            result.push(board.map(r => r.join('')));
            return;
        }

        for (let col = 0; col < n; col++) {
            // Check conflicts in O(1)
            if (cols.has(col) || posDiag.has(row + col) || negDiag.has(row - col)) {
                continue;
            }

            // Place Queen
            cols.add(col);
            posDiag.add(row + col);
            negDiag.add(row - col);
            board[row][col] = 'Q';

            backtrack(row + 1);

            // Backtrack: Remove Queen
            cols.delete(col);
            posDiag.delete(row + col);
            negDiag.delete(row - col);
            board[row][col] = '.';
        }
    }

    backtrack(0);
    return result;
};

const output = solveNQueens(4);
console.log(output);
