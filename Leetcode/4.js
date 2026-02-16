/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // If nums1 is longer, swap so we always binary search on the smaller array
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }
    
    let m = nums1.length;
    let n = nums2.length;
    let low = 0;
    let high = m;
    
    while (low <= high) {
        // Partition at i in nums1 and j in nums2
        let partitionX = Math.floor((low + high) / 2);
        let partitionY = Math.floor((m + n + 1) / 2) - partitionX;
        
        // Handle edges (-Infinity / Infinity)
        let maxLeftX = (partitionX === 0) ? -Infinity : nums1[partitionX - 1];
        let minRightX = (partitionX === m) ? Infinity : nums1[partitionX];
        
        let maxLeftY = (partitionY === 0) ? -Infinity : nums2[partitionY - 1];
        let minRightY = (partitionY === n) ? Infinity : nums2[partitionY];
        
        // Check if correct partition logic is met:
        // leftX <= rightY AND leftY <= rightX
        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            // We have partitioned correctly
            if ((m + n) % 2 === 0) {
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
            } else {
                return Math.max(maxLeftX, maxLeftY);
            }
        } 
        else if (maxLeftX > minRightY) {
            // We are too far right in nums1, need to move left
            high = partitionX - 1;
        } 
        else {
            // We are too far left in nums1, need to move right
            low = partitionX + 1;
        }
    }
    
    throw new Error("Input arrays are likely not sorted.");
};