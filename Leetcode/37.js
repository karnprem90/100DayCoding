/**
 * 37. Sudoku Solver
 * 
 * Approach: BACKTRACKING
 * 
 * 1. Find the first empty cell ('.')
 * 2. Try digits '1' to '9'
 * 3. For each digit, check if it's SAFE (not in same row, column, or 3x3 box)
 * 4. If safe → place it → recurse to next empty cell
 * 5. If recursion succeeds → done!
 * 6. If recursion fails → REMOVE digit (backtrack) → try next digit
 * 7. If no digit works → return false (triggers backtracking in caller)
 */

var solveSudoku = function(board) {
    solve(board);
};

function solve(board) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            // Only work on empty cells
            if (board[row][col] === '.') {
                // Try digits 1 through 9
                for (let num = 1; num <= 9; num++) {
                    let char = String(num);

                    if (isValid(board, row, col, char)) {
                        board[row][col] = char;         // ✅ Place it

                        if (solve(board)) return true;  // Recurse → worked!

                        board[row][col] = '.';          // ❌ Backtrack!
                    }
                }
                // None of 1-9 worked → dead end, backtrack
                return false;
            }
        }
    }
    // No empty cells left → puzzle is solved!
    return true;
}

function isValid(board, row, col, num) {
    for (let i = 0; i < 9; i++) {
        // Check ROW: is num already in this row?
        if (board[row][i] === num) return false;

        // Check COLUMN: is num already in this column?
        if (board[i][col] === num) return false;

        // Check 3x3 BOX: is num already in this box?
        // boxRow/boxCol = top-left corner of box + offset within box
        let boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        let boxCol = 3 * Math.floor(col / 3) + (i % 3);
        if (board[boxRow][boxCol] === num) return false;
    }
    return true;
}