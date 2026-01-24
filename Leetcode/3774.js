var absDifference = function(nums, k) {
    nums.sort((a, b) => a - b);
    let left = 0;
    let right = nums.length - 1;
    let diff = 0;
    let largest = 0;
    let smallest = 0; 
    while(k) {
        largest += nums[right];
        smallest += nums[left];
        k--;
        left++;
        right--;
    }
    diff = Math.abs(largest - smallest);
    return diff;
};


console.log(absDifference([5, 2, 2, 4], 2));
console.log(absDifference([100], 1));
console.log(absDifference([1, 2], 2));