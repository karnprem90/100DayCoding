/**
 * 1030. Matrix Cells in Distance Order
 * 
 * Given rows, cols, rCenter, cCenter - return all cells sorted by Manhattan distance
 * Manhattan Distance = |r1 - r2| + |c1 - c2|
 * 
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
    // Step 1: Generate all cells in the matrix
    const cells = [];
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            cells.push([r, c]);
        }
    }
    
    // Step 2: Sort cells by Manhattan distance from (rCenter, cCenter)
    cells.sort((a, b) => {
        const distA = Math.abs(a[0] - rCenter) + Math.abs(a[1] - cCenter);
        const distB = Math.abs(b[0] - rCenter) + Math.abs(b[1] - cCenter);
        return distA - distB;
    });
    
    return cells;
};

// ============== STEP BY STEP EXPLANATION ==============

console.log("═══════════════════════════════════════════════════════════════");
console.log("                    EXAMPLE 2 WALKTHROUGH");
console.log("    Input: rows = 2, cols = 2, rCenter = 0, cCenter = 1");
console.log("═══════════════════════════════════════════════════════════════");
console.log("");

// STEP 1: Show the Matrix
console.log("📌 STEP 1: Visualize the Matrix (2 rows × 2 cols)");
console.log("");
console.log("         col 0     col 1");
console.log("        ┌─────────┬─────────┐");
console.log("  row 0 │  (0,0)  │  (0,1)  │  ← Center is here at (0,1)");
console.log("        ├─────────┼─────────┤");
console.log("  row 1 │  (1,0)  │  (1,1)  │");
console.log("        └─────────┴─────────┘");
console.log("");

// STEP 2: Calculate Distance for Each Cell
console.log("📌 STEP 2: Calculate Manhattan Distance for Each Cell");
console.log("");
console.log("   Formula: distance = |row - rCenter| + |col - cCenter|");
console.log("   Center point: (rCenter=0, cCenter=1)");
console.log("");
console.log("   Cell (0,0): |0 - 0| + |0 - 1| = 0 + 1 = 1");
console.log("   Cell (0,1): |0 - 0| + |1 - 1| = 0 + 0 = 0  ⭐ (This is the center!)");
console.log("   Cell (1,0): |1 - 0| + |0 - 1| = 1 + 1 = 2");
console.log("   Cell (1,1): |1 - 0| + |1 - 1| = 1 + 0 = 1");
console.log("");

// STEP 3: Show distances on matrix
console.log("📌 STEP 3: Matrix with Distances");
console.log("");
console.log("         col 0     col 1");
console.log("        ┌─────────┬─────────┐");
console.log("  row 0 │  d = 1  │  d = 0  │  ⭐ Center");
console.log("        ├─────────┼─────────┤");
console.log("  row 1 │  d = 2  │  d = 1  │");
console.log("        └─────────┴─────────┘");
console.log("");

// STEP 4: Sort and Result
console.log("📌 STEP 4: Sort Cells by Distance (smallest to largest)");
console.log("");
console.log("   Distance 0: (0,1)");
console.log("   Distance 1: (0,0), (1,1)  ← same distance, any order is fine");
console.log("   Distance 2: (1,0)");
console.log("");
console.log("   ✅ Result: [[0,1], [0,0], [1,1], [1,0]]");
console.log("   Actual Output:", JSON.stringify(allCellsDistOrder(2, 2, 0, 1)));
console.log("");

console.log("═══════════════════════════════════════════════════════════════");
console.log("                    EXAMPLE 3 WALKTHROUGH");
console.log("    Input: rows = 2, cols = 3, rCenter = 1, cCenter = 2");
console.log("═══════════════════════════════════════════════════════════════");
console.log("");

console.log("📌 STEP 1: Visualize the Matrix (2 rows × 3 cols)");
console.log("");
console.log("         col 0     col 1     col 2");
console.log("        ┌─────────┬─────────┬─────────┐");
console.log("  row 0 │  (0,0)  │  (0,1)  │  (0,2)  │");
console.log("        ├─────────┼─────────┼─────────┤");
console.log("  row 1 │  (1,0)  │  (1,1)  │  (1,2)  │  ← Center at (1,2)");
console.log("        └─────────┴─────────┴─────────┘");
console.log("");

console.log("📌 STEP 2: Calculate Manhattan Distance for Each Cell");
console.log("");
console.log("   Center point: (rCenter=1, cCenter=2)");
console.log("");
console.log("   Cell (0,0): |0 - 1| + |0 - 2| = 1 + 2 = 3");
console.log("   Cell (0,1): |0 - 1| + |1 - 2| = 1 + 1 = 2");
console.log("   Cell (0,2): |0 - 1| + |2 - 2| = 1 + 0 = 1");
console.log("   Cell (1,0): |1 - 1| + |0 - 2| = 0 + 2 = 2");
console.log("   Cell (1,1): |1 - 1| + |1 - 2| = 0 + 1 = 1");
console.log("   Cell (1,2): |1 - 1| + |2 - 2| = 0 + 0 = 0  ⭐ (Center!)");
console.log("");

console.log("📌 STEP 3: Matrix with Distances");
console.log("");
console.log("         col 0     col 1     col 2");
console.log("        ┌─────────┬─────────┬─────────┐");
console.log("  row 0 │  d = 3  │  d = 2  │  d = 1  │");
console.log("        ├─────────┼─────────┼─────────┤");
console.log("  row 1 │  d = 2  │  d = 1  │  d = 0  │ ⭐");
console.log("        └─────────┴─────────┴─────────┘");
console.log("");

console.log("📌 STEP 4: Sort Cells by Distance");
console.log("");
console.log("   Distance 0: (1,2)");
console.log("   Distance 1: (0,2), (1,1)");
console.log("   Distance 2: (0,1), (1,0)");
console.log("   Distance 3: (0,0)");
console.log("");
console.log("   ✅ Result: [[1,2], [0,2], [1,1], [0,1], [1,0], [0,0]]");
console.log("   Actual Output:", JSON.stringify(allCellsDistOrder(2, 3, 1, 2)));
