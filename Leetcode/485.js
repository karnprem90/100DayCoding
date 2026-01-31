/**
 * 485. Max Consecutive Ones
 * 
 * Given a binary array nums, return the maximum number of consecutive 1's in the array.
 * 
 * Time: O(n) - single pass
 * Space: O(1) - only 2 variables
 */

var findMaxConsecutiveOnes = function(nums) {
    let current = 0;
    let max = 0;
    
    for (const num of nums) {
        if (num === 1) {
            current++;
        } else {
            current = 0;
        }
        max = Math.max(max, current);
    }
    
    return max;
};

// Test cases
console.log(findMaxConsecutiveOnes([1,1,0,1,1,1])); // Output: 3
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1])); // Output: 2
