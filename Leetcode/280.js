var wiggleSort = function(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (i % 2 === 0) {
            if (nums[i] > nums[i + 1]) {
                [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
            }
        } else {
            if (nums[i] < nums[i + 1]) {
                [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
            }
        }
    }
    return nums;
};

console.log(wiggleSort([6,6,5,6,3,8])); //output: [3,5,1,6,2,4]