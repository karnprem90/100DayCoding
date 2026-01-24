var largestSumAfterKNegations = function(nums, k) {
    nums = nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length && k > 0 && nums[i] < 0; i++) {
        nums[i] = -nums[i];
        k--;
    }
    
    if (k % 2 === 1) {
        nums.sort((a, b) => a - b);
        nums[0] = -nums[0];
    }
    
    return nums.reduce((acc, num) => acc + num, 0);
};

console.log(largestSumAfterKNegations([4, 2, 3], 1))
console.log(largestSumAfterKNegations([3, -1, 0, 2], 3))
console.log(largestSumAfterKNegations([2, -3, -1, 5, -4], 2))
