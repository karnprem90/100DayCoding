/**
 * Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
 * Output: 6
 * Explanation: [1,1,1,0,0,1,1,1,1,1,1]
 * Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 * Example 2:
 *
 * Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
 * Output: 10
 * Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
 * Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 */

var longestOnes = function (nums, k) {
    let start = 0;
    let window = 0;
    while ( window < nums.length ) {
      if (nums[window++] === 0) {
          k--;
      }

      if (k < 0) {
          if (nums[start++] === 0) {
              k++;
          }
      }
    }
    return window - start;
};

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2));