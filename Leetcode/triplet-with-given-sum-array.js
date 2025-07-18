/**
 * Find a triplet with the given sum in an array
 * Given an unsorted integer array, find a triplet with a given sum in it.
 *
 * For example,
 *
 * Input: nums = [ 2, 7, 4, 0, 9, 5, 1, 3 ]target = 6 Output: Triplet exists. The triplets with the given sum 6 are {0, 1, 5}, {0, 2, 4}, {1, 2, 3}
 */

function tripletWithGivenSumArray(arr, target) {
    arr.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let j = i + 1;
        let k = arr.length - 1;
        while (j < k) {
            let sum = arr[i] + arr[j] + arr[k];
            if (sum > target) {
                k--;
            } else if (sum < target) {
                j++
            } else {
                let val = [arr[i], arr[j], arr[k]];
                result.push(val);
                while (j < k && arr[j] === arr[j + 1]) j++;
                while (j < k && arr[k] === arr[k - 1]) k--;
                j++;
                k--;
            }
        }
    }
    return result;
}
let arr = [ 2, 7, 4, 0, 9, 5, 1, 3 ];
let target = 6;
console.log(tripletWithGivenSumArray(arr, target));