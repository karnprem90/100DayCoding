var maxProduct = function(nums) {
    let product = 1;
    let maxProduct = -Infinity
    let arr = Array.from({ length: nums.length }, () => 0);
    arr[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
            product  = arr[i - 1] * nums[i];
            let max = Math.max(product, arr[i - 1]);
            arr[i] = Math.max(max, nums[i]);
    }
    console.log(arr[arr.length - 1]);
};

console.log(maxProduct([2, 3, -2, 4]));