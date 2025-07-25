/**
 * Given an integer array having distinct elements, find the surpasser count for each element in it. In other words, for each array element,
 * find the total number of elements to its right, which are greater than it.
 * For example,
 *
 * Input:  { 4, 6, 3, 9, 7, 10 } Output: { 4, 3, 3, 1, 1, 0 }
 */

function surpasserCount(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let count = 0;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] >= num) {
                count++;
            }
        }
        result.push(count);
    }
    return result;
}


function optimizedVersion(nums) {
    let newNums = nums.slice();
    let result = [];
    let map = {};
    let map2 = {};
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = i;
    }
    newNums.sort((a, b) => a - b);
    for (let i = 0; i < newNums.length; i++) {
        map2[newNums[i]] = i;
    }
    let length = nums.length - 1;
    for (let i = 0; i < nums.length; i++) {
       let val1 = length - map[nums[i]];
       let val2 = length - map2[nums[i]];
       let count = Math.min(val1, val2);
       result.push(count);
    }
    return result;
}


console.log(optimizedVersion([4, 6, 3, 9, 7, 10]));