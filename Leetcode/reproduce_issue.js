
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // Ensure nums1 is the smaller array for binary search optimization
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }
    
    let m = nums1.length;
    let n = nums2.length;
    let low = 0;
    let high = m;
    
    while (low <= high) {
        // Partition nums1 at i
        let i = Math.floor((low + high) / 2);
        // Partition nums2 at j
        // (m + n + 1) / 2 ensures that left half has equal or 1 more element than right half
        let j = Math.floor((m + n + 1) / 2) - i;
        
        // Handle edge cases for partitions at boundaries (infinity for comparison)
        let maxLeft1 = (i === 0) ? -Infinity : nums1[i - 1];
        let minRight1 = (i === m) ? Infinity : nums1[i];
        
        let maxLeft2 = (j === 0) ? -Infinity : nums2[j - 1];
        let minRight2 = (j === n) ? Infinity : nums2[j];
        
        // Check if we found the correct partition
        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            // Found correct partition
            if ((m + n) % 2 === 0) {
                // Even length: average of max(lefts) and min(rights)
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
            } else {
                // Odd length: max of lefts
                return Math.max(maxLeft1, maxLeft2);
            }
        } 
        else if (maxLeft1 > minRight2) {
            // We are too far right in nums1, move left
            high = i - 1;
        } 
        else {
            // We are too far left in nums1, move right
            low = i + 1;
        }
    }
    
    throw new Error("Input arrays are not sorted or invalid");
};

// Test cases
console.log("Test Case 1: [1, 3], [2]");
console.log("Expected: 2");
console.log("Actual:", findMedianSortedArrays([1, 3], [2]));

console.log("\nTest Case 2: [1, 2], [3, 4]");
console.log("Expected: 2.5");
console.log("Actual:", findMedianSortedArrays([1, 2], [3, 4]));

console.log("\nTest Case 3: [1], [2, 3]");
console.log("Expected: 2");
console.log("Actual:", findMedianSortedArrays([1], [2, 3]));

console.log("\nTest Case 4: [3], [-2, -1]");
console.log("Expected: -1");
console.log("Actual:", findMedianSortedArrays([3], [-2, -1]));
