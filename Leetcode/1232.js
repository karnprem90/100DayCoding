/**
 * LeetCode 1232: Check If It Is a Straight Line
 * 
 * APPROACH: Cross-Multiplication to Compare Slopes
 * 
 * KEY MATH CONCEPT:
 * - For points to be on a straight line, the slope between any two 
 *   consecutive points must be the same.
 * 
 * - Slope formula: (y2 - y1) / (x2 - x1)
 * 
 * - But division is risky! (division by zero, floating-point errors)
 * 
 * - Solution: Cross-multiply instead!
 *   Instead of: (y2-y1)/(x2-x1) == (y3-y1)/(x3-x1)
 *   We check:   (y2-y1)*(x3-x1) == (y3-y1)*(x2-x1)
 * 
 * ALGORITHM:
 * 1. Take the first two points to establish our reference slope
 * 2. For each subsequent point, check if it maintains the same slope
 * 3. If any point breaks the slope pattern, return false
 * 
 * Time Complexity: O(n) - we check each point once
 * Space Complexity: O(1) - only using a few variables
 */

var checkStraightLine = function(coordinates) {
    // Edge case: 2 points always form a straight line
    if (coordinates.length === 2) return true;
    
    // Get reference points (first two points)
    const [x0, y0] = coordinates[0];  // First point
    const [x1, y1] = coordinates[1];  // Second point
    
    // Calculate the reference slope components (dy and dx)
    // We DON'T divide - we keep them separate for cross-multiplication
    const dy = y1 - y0;  // Change in y (rise)
    const dx = x1 - x0;  // Change in x (run)
    
    // Check every other point starting from index 2
    for (let i = 2; i < coordinates.length; i++) {
        const [xi, yi] = coordinates[i];
        
        // Calculate slope components from first point to current point
        const dyi = yi - y0;  // Change in y from point 0 to point i
        const dxi = xi - x0;  // Change in x from point 0 to point i
        
        // Cross-multiplication check:
        // If slopes are equal: dy/dx == dyi/dxi
        // Cross-multiply:      dy * dxi == dyi * dx
        if (dy * dxi !== dyi * dx) {
            return false;  // Slopes don't match - not a straight line!
        }
    }
    
    return true;  // All points passed the check!
};

// ============ TEST CASES ============

// Example 1: Points form a straight line (slope = 1)
// (1,2) -> (2,3) -> (3,4) -> (4,5) -> (5,6) -> (6,7)
console.log("Example 1:", checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]));
// Expected: true

// Example 2: Points do NOT form a straight line
// The third point (3,4) breaks the pattern
console.log("Example 2:", checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]));
// Expected: false

// Additional test: Vertical line (where dx = 0)
// This would cause division by zero with naive approach!
console.log("Vertical line:", checkStraightLine([[1,1],[1,2],[1,3],[1,4]]));
// Expected: true

// Additional test: Horizontal line
console.log("Horizontal line:", checkStraightLine([[1,5],[2,5],[3,5],[4,5]]));
// Expected: true

// Additional test: Only 2 points (edge case)
console.log("Two points:", checkStraightLine([[0,0],[1,1]]));
// Expected: true
