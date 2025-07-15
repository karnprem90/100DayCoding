/**
 * Given an integer array, find the subarray that has the maximum product of its elements. The solution should return the maximum product of elements among all possible subarrays.
 *
 * For example,
 *
 * Input:  { -6, 4, -5, 8, -10, 0, 8 }Output: 1600Explanation: The maximum product subarray is {4, -5, 8, -10} having product 1600  Input:  { 40, 0, -20, -10 }Output: 200Explanation: The maximum product subarray is {-20, -10} having product 200
 */


function maxProductSubarray(arr) {
    let result = arr[0];
    let min = arr[0];
    let max = arr[0];
    let i = 1;
    while (i < arr.length) {
        const currentMax = Math.max(arr[i], max * arr[i], min * arr[i]);
        min = Math.min(arr[i], max * arr[i], min * arr[i]);
        max = currentMax;
        result = Math.max(result, max);
        i++;
    }
    return result;
}

console.log(maxProductSubarray([40, 0, -20, -10]));
console.log(maxProductSubarray([-6, 4, -5, 8, -10, 0, 8]))
console.log(maxProductSubarray([40, 0, -20, -10]))
console.log(maxProductSubarray([2, 3, -2, 4]));
console.log(maxProductSubarray([-2, -3, 0, -2, -40]));
console.log(maxProductSubarray([6, -3, -10, 0, 2]));