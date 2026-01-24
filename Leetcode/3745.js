var maximizeExpressionOfThree = function(nums) {
    let min = Infinity; 
    let max1 = -Infinity;
    let max2 = max1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        }
        if (nums[i] >= max2) {
            [max1, max2] = [max2, nums[i]];
        } else if (nums[i] >= max1) {
            max1 = nums[i];
        }
    }
    return max1 + max2 - min;
};
