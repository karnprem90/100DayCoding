/**
 * Given an integer array nums and two integers firstLen and secondLen, return the maximum sum of elements in two non-overlapping subarrays with lengths firstLen and secondLen.
 *
 * The array with length firstLen could occur before or after the array with length secondLen, but they have to be non-overlapping.
 *
 * A subarray is a contiguous part of an array.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [0,6,5,2,2,5,1,9,4], firstLen = 1, secondLen = 2
 * Output: 20
 * Explanation: One choice of subarrays is [9] with length 1, and [6,5] with length 2.
 * Example 2:
 *
 * Input: nums = [3,8,1,3,2,1,8,9,0], firstLen = 3, secondLen = 2
 * Output: 29
 * Explanation: One choice of subarrays is [3,8,1] with length 3, and [8,9] with length 2.
 * Example 3:
 *
 * Input: nums = [2,1,5,6,0,9,5,0,3,8], firstLen = 4, secondLen = 3
 * Output: 31
 * Explanation: One choice of subarrays is [5,6,0,9] with length 4, and [0,3,8] with length 3.
 */

var maxSumTwoNoOverlap = function(nums, firstLen, secondLen) {
    const n = nums.length;
    let prefixSum = new Array(n + 1).fill(0);

    // Calculate the prefix sum array
    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i];
    }

    // Helper function to get sum of subarray from i to j (inclusive)
    const getSum = (i, j) => prefixSum[j + 1] - prefixSum[i];

    // Helper function to calculate the maximum sum for two non-overlapping subarrays
    const calculateMaxSum = (firstLen, secondLen) => {
        let maxSum = 0;
        for (let i = firstLen - 1; i < n - secondLen; i++) {
            let sumFirst = getSum(i - firstLen + 1, i);
            for (let j = i + secondLen; j < n; j++) {
                let sumSecond = getSum(j - secondLen + 1, j);
                maxSum = Math.max(maxSum, sumFirst + sumSecond);
            }
        }
        return maxSum;
    };

    // Calculate the maximum sum considering both possibilities
    let maxSum1 = calculateMaxSum(firstLen, secondLen);
    let maxSum2 = calculateMaxSum(secondLen, firstLen);

    return Math.max(maxSum1, maxSum2);

};
console.log(maxSumTwoNoOverlap([0,6,5,2,2,5,1,9,4], 1, 2))