/**
 * You are given an m x n matrix board containing letters 'X' and 'O', capture regions that are surrounded:

Connect: A cell is connected to adjacent cells horizontally or vertically.
Region: To form a region connect every 'O' cell.
Surround: A region is surrounded if none of the 'O' cells in that region are on the edge of the board. Such regions are completely enclosed by 'X' cells.
To capture a surrounded region, replace all 'O's with 'X's in-place within the original board. You do not need to return anything.

 

Example 1:

Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]

Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]

Explanation:


In the above diagram, the bottom region is not captured because it is on the edge of the board and cannot be surrounded.

Example 2:

Input: board = [["X"]]

Output: [["X"]]
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    if (!board || board.length === 0) {
        return;
    }

    const rows = board.length;
    const cols = board[0].length;

    // Helper function for DFS
    const dfs = (r, c) => {
        // Check boundaries and if the cell is 'O'
        if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== 'O') {
            return;
        }

        // Mark the cell as visited (temporarily change to 'T')
        board[r][c] = 'T';

        // Explore neighbors
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    };

    // 1. Mark all 'O's connected to the border
    // Check first and last columns
    for (let i = 0; i < rows; i++) {
        if (board[i][0] === 'O') dfs(i, 0);
        if (board[i][cols - 1] === 'O') dfs(i, cols - 1);
    }

    // Check first and last rows
    for (let j = 0; j < cols; j++) {
        if (board[0][j] === 'O') dfs(0, j);
        if (board[rows - 1][j] === 'O') dfs(rows - 1, j);
    }

    // 2. Flip the remaining 'O's to 'X' and revert 'T's to 'O'
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X'; // Capture surrounded regions
            } else if (board[i][j] === 'T') {
                board[i][j] = 'O'; // Revert border-connected regions
            }
        }
    }

    return board; // Although the problem says "Do not return anything", returning for testing
};

// Example usage:
const board1 = [["X", "X", "X", "X"], ["X", "O", "O", "X"], ["X", "X", "O", "X"], ["X", "O", "X", "X"]];
console.log("Original Board:", JSON.stringify(board1));
solve(board1);
console.log("Solved Board:", JSON.stringify(board1));

const board2 = [["X"]];
console.log("Original Board:", JSON.stringify(board2));
solve(board2);
console.log("Solved Board:", JSON.stringify(board2));