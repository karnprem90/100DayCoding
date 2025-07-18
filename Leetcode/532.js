/**
 * Given an array of integers nums and an integer k, return the number of unique k-diff pairs in the array.
 *
 * A k-diff pair is an integer pair (nums[i], nums[j]), where the following are true:
 *
 * 0 <= i, j < nums.length
 * i != j
 * |nums[i] - nums[j]| == k
 * Notice that |val| denotes the absolute value of val.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [3,1,4,1,5], k = 2
 * Output: 2
 * Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
 * Although we have two 1s in the input, we should only return the number of unique pairs.
 * Example 2:
 *
 * Input: nums = [1,2,3,4,5], k = 1
 * Output: 4
 * Explanation: There are four 1-diff pairs in the array, (1, 2), (2, 3), (3, 4) and (4, 5).
 * Example 3:
 *
 * Input: nums = [1,3,1,5,4], k = 0
 * Output: 1
 * Explanation: There is one 0-diff pair in the array, (1, 1).
 */

var findPairs = function(nums, k) {
    nums.sort((a, b) => a - b);
    let count = 0;
    let seen = {};

    for (let i = 0; i < nums.length; i++) {
        if (seen[nums[i]]) {
            continue;
        }

        seen[nums[i]] = true;
        let val = nums[i] + k;
        let foundVal = binarySearch(i + 1, nums.length - 1, val);
        if (foundVal !== -1) {
            count++;
        }

    }

    function binarySearch(left, right, val) {
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === val) {
                return mid;
            } else if (nums[mid] > val) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return -1;
    }
    return count;

};

console.log(findPairs([3,1,4,1,5], 0));