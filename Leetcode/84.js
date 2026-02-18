/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let maxArea = 0;
    let stack = [];
    
    // Add a Sentinel value (0) at the end.
    // This forces the stack to empty completely because 0 is smaller than any valid height.
    heights.push(0); 

    for (let i = 0; i < heights.length; i++) {
        // While current bar is smaller than the bar at stack top, process the stack top
        while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
            let height = heights[stack.pop()];
            // Width calculation:
            // If stack empty: extends from 0 to i (i)
            // If stack not empty: extends from (stack top + 1) to i (i - stack top - 1)
            let width = stack.length > 0 ? i - stack[stack.length - 1] - 1 : i;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }
    return maxArea;
};

// Test cases
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])); // Expected: 10
console.log(largestRectangleArea([2, 4])); // Expected: 4
console.log(largestRectangleArea([2, 1, 2])); // Expected: 3
console.log(largestRectangleArea([0])); // Expected: 0
console.log(largestRectangleArea([1])); // Expected: 1
