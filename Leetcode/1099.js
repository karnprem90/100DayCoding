// LeetCode 1099: Two Sum Less Than K
// Find max sum of two elements where sum < k

// Approach 1: Brute Force O(n²)
var twoSumLessThanK_bruteForce = function(nums, k) {
    let maxSum = -1;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const sum = nums[i] + nums[j];
            if (sum < k) {
                maxSum = Math.max(maxSum, sum);
            }
        }
    }
    return maxSum;
};

// Approach 2: Two Pointers O(n log n) - Optimal
var twoSumLessThanK = function(nums, k) {
    nums.sort((a, b) => a - b);  // Sort ascending
    
    let left = 0;
    let right = nums.length - 1;
    let maxSum = -1;
    
    while (left < right) {
        const sum = nums[left] + nums[right];
        
        if (sum < k) {
            maxSum = Math.max(maxSum, sum);
            left++;  // Try to find larger sum
        } else {
            right--;  // Sum too large, decrease it
        }
    }
    
    return maxSum;
};

// Test cases
console.log(twoSumLessThanK([34,23,1,24,75,33,54,8], 60));  // Expected: 58
console.log(twoSumLessThanK([10,20,30], 15));               // Expected: -1
console.log(twoSumLessThanK([254,914,110,900,147,441,209,122,571,942,136], 1000)); // Expected: 996
