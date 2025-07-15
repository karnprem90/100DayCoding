/**
 * Given an integer array, find the minimum sum subarray of size k, where k is a positive integer.
 *
 * For example,
 *
 * Input:  {[10, 4, 2, 5, 6, 3, 8, 1]}, k = 3 Output: Minimum sum subarray of size 3 is (1, 3)
 */

function findMinimumOfSubArray(nums, k) {
    let min = 0;
    let sum = 0;
    let minSum = Infinity;
    let result;
    let i = 0;
    let j = 0;
    while (j < nums.length) {
        sum += nums[j];
        if ((j + 1)  >= k) {
            if (minSum > sum) {
                minSum = sum;
                result = [i, j];
            }
            sum -= nums[i];
            i++;
        }
        j++;
    }
    return result;
}

console.log(findMinimumOfSubArray([10, 4, 2, 5, 6, 3, 8, 1], 3)) // [1,3]
console.log(findMinimumOfSubArray([12, 34, 10, 6, 40, 3], 4)) // [2, 5]
console.log(findMinimumOfSubArray([8, 7, 6, 5, 4, 3, 2, 1], 5)) // [3, 7]
console.log(findMinimumOfSubArray([4, 2, 2, 7, 8, 1, 2, 8, 1, 0], 3)) // [5,7]
console.log(findMinimumOfSubArray([3, 3, 3, 3, 3], 3)) // [0,2]
console.log(findMinimumOfSubArray([10, -2, -4, 1, 5, -3], 2)) // [2,3]