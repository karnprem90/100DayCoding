function longestSubarrayWithZeroSum(nums) {
    let map = new Map();
    let maxLen = 0;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum === 0) {
            maxLen = i + 1;
        } else {
            if (map.has(sum)) {
                maxLen = Math.max(maxLen, i - map.get(sum));
            } else {
                map.set(sum, i);
            }
        }
    }
    return maxLen;
}

console.log(longestSubarrayWithZeroSum([9, -3, 3, -1, 6, -5]));