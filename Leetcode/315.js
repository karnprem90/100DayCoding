/**
 * Given an integer array nums, return an integer array counts where counts[i] is the number of smaller elements to the right of nums[i].
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [5,2,6,1]
 * Output: [2,1,1,0]
 * Explanation:
 * To the right of 5 there are 2 smaller elements (2 and 1).
 * To the right of 2 there is only 1 smaller element (1).
 * To the right of 6 there is 1 smaller element (1).
 * To the right of 1 there is 0 smaller element.
 * Example 2:
 *
 * Input: nums = [-1]
 * Output: [0]
 * Example 3:
 *
 * Input: nums = [-1,-1]
 * Output: [0,0]
 */

function countSmaller(nums) {
    let result = new Array(nums.length);
    let sorted = []; // Will maintain sorted order of seen elements

    // Process from right to left
    for (let i = nums.length - 1; i >= 0; i--) {
        // Binary search for the leftmost position where nums[i] can be inserted
        let left = 0, right = sorted.length;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (sorted[mid] < nums[i]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        result[i] = left; // left is the count of smaller elements

        // Insert nums[i] in sorted position to maintain order
        sorted.splice(left, 0, nums[i]);
    }

    return result;
}

// console.log(countSmaller([10, 5, 2, 7, 8, 9]));
console.log(countSmaller([5,2,6,1]))