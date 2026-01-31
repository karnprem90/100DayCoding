var isMajorityElement = function(nums, target) {
    let left = 0;
    for (let i = 0; i < left + nums.length / 2; i++) {
        if (nums[i] === target) {
            left++;
        }
    }
    return left > nums.length / 2;
};

console.log(isMajorityElement([2, 4, 5, 5, 5, 5, 5, 6, 6], 5));
console.log(isMajorityElement([10, 100, 101, 101], 101));