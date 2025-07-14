/**
 * Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [3,2,3]
 * Output: [3]
 * Example 2:
 *
 * Input: nums = [1]
 * Output: [1]
 * Example 3:
 *
 * Input: nums = [1,2]
 * Output: [1,2]
 * @param nums
 */

var majorityElement = function(nums) {
    let candidate1 = null;
    let candidate2 = null;
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (count1 === 0 && nums[i] !== candidate2) {
            candidate1 = nums[i];
            count1 = 1;
        } else if (count2 === 0 && nums[i] !== candidate1) {
            candidate2 = nums[i];
            count2 = 2;
        } else if (nums[i] === candidate1) {
            count1++;
        } else if (nums[i] === candidate2) {
            count2++;
        } else {
            count1--
            count2--
        }
    }
    count1 = 0;
    count2 = 0;
    for (let num of nums) {
        if (num === candidate1) count1++;
        if (num === candidate2) count2++;
    }

    let result = [];
    if (count1 > Math.floor(nums.length / 3)) result.push(candidate1);
    if (count2 > Math.floor(nums.length / 3)) result.push(candidate2);

    return result;
};
