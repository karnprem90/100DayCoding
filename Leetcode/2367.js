/**
 * You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff. A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:
 *
 * i < j < k,
 * nums[j] - nums[i] == diff, and
 * nums[k] - nums[j] == diff.
 * Return the number of unique arithmetic triplets.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [0,1,4,6,7,10], diff = 3
 * Output: 2
 * Explanation:
 * (1, 2, 4) is an arithmetic triplet because both 7 - 4 == 3 and 4 - 1 == 3.
 * (2, 4, 5) is an arithmetic triplet because both 10 - 7 == 3 and 7 - 4 == 3.
 * Example 2:
 *
 * Input: nums = [4,5,6,7,8,9], diff = 2
 * Output: 2
 * Explanation:
 * (0, 2, 4) is an arithmetic triplet because both 8 - 6 == 2 and 6 - 4 == 2.
 * (1, 3, 5) is an arithmetic triplet because both 9 - 7 == 2 and 7 - 5 == 2.
 */

function arithmeticTriplets(num, diff) {
    let result = [];
    for (let i = 0; i < num.length; i++) {
        let j = 1;
        let k = num.length - 1;
        let newJ = -1;
        while ( j < k) {
            if (num[j] - num[i] === diff) {
                newJ = j;
                break;
            } else if (num[j] - num[i] < diff) {
                j++;
            } else {
                k--
            }
        }
        while (newJ > 0 && newJ < k) {
            if (num[k] - num[j] === diff) {
                let val = [num[i], num[j], num[k]];
                result.push(val);
                break;
            } else if (num[k] - num[j] > diff) {
                k--;
            } else if (num[j] - num[i] < diff){
                newJ++;
            }
        }
    }
    return result.length;
}


function optimizedOne(nums, diff) {
    let map = new Map();
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i] - diff;
        if (map.has(val) && map.has(val - diff)) {
            count++;
        }
        map.set(nums[i], nums[i]);
    }
}

console.log(arithmeticTriplets([4,5,6,7,8,9], 2))