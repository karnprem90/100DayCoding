// var maxSubArrayLen = function(nums, k) {
//     let maxLength = 0;
//     for (let i = 0; i < nums.length; i++) {
//         let sum = nums[i];
//         if (sum === k) {
//             maxLength = Math.max(maxLength, 1);
//         }
//         for (let j = i + 1; j < nums.length; j++) {
//             sum += nums[j];
//             if (sum === k) {
//                 maxLength = Math.max(maxLength, j - i + 1);
//             }
//         }
//     }
//     return maxLength;
//
// };


var maxSubArrayLen = function(nums, k) {
    let map = {};
    map[0] = -1;
    let sum = 0;
    let maxLength = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (!(sum in map)) {
            map[sum] = i;
        }

        if (sum - k in map) {
            maxLength = Math.max(maxLength, i - map[sum - k]);
        }
    }
    return maxLength;

};

console.log(maxSubArrayLen([ 1, -1, 5, -2, 3 ], 3));


var findMaxLength = function(nums) {
    let map = new Map();
    let count = 0;
    let result = 0;
    map.set(0, -1);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;
        } else {
            count--;
        }

        if (map.has(count)) {
            result = Math.max(result, i - map.get(count));
        } else {
            map.set(count, i);
        }
    }
    return result;
};


console.log(findMaxLength([0,1,1,1,1,1,0,0,0]));