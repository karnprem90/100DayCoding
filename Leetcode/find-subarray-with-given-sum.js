/**
 * Find subarrays with a given sum in an array
 * Given an integer array, find subarrays with a given sum in it.
 *
 * For example,
 *
 * Input: nums[] = { 3, 4, -7, 1, 3, 3, 1, -4 }target = 7 Output: Subarrays with the given sum are { 3, 4 }{ 3, 4, -7, 1, 3, 3 }{ 1, 3, 3 }{ 3, 3, 1 }
 */


function findSubarrayWithGivenSum(nums, sum) {
    let map = {
        0: -1
    };

    let subArray = [];
    let totalSum = 0;
    for (let i = 0; i < nums.length; i++) {
        totalSum += nums[i];
        if (totalSum - sum in map) {
            subArray.push([nums[map[totalSum - sum] + 1], nums[i]]);
        }
        map[totalSum] = i;
    }
    return subArray;
}


console.log(findSubarrayWithGivenSum([ 3, 4, -7, 1, 3, 3, 1, -4 ], 7));
