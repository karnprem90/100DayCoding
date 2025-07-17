/**
 * Given an integer array, find a subarray having a given sum in it.
 *
 * For example,
 *
 * Input:  nums[] = {2, 6, 0, 9, 7, 3, 1, 4, 1, 10}, target = 15Output: {6, 0, 9}  Input:  nums[] = {0, 5, -7, 1, -4, 7, 6, 1, 4, 1, 10}, target = 15Output: {1, -4, 7, 6, 1, 4} or {4, 1, 10}  Input:  nums[] = {0, 5, -7, 1, -4, 7, 6, 1, 4, 1, 10}, target = -3Output: {1, -4} or {-7, 1, -4, 7}
 */


function subarrayHavingTheGivenSum(arr, target) {
    let map = {
        0: -1
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        let val = sum - target;
        if (!map[sum]) {
            map[sum] = i;
        }
        if (map[val] >= 0) {
            return [map[val] + 1, i];
        }
    }
}
let arr = [0, 5, -7, 1, -4, 7, 6, 1, 4, 1, 10]
let target = -3;
console.log(subarrayHavingTheGivenSum(arr, target));