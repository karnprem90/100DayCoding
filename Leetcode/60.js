var getPermutation = function(n, k) {
    let arr = [];
    let v
    for (let i = 0; i < n ; i++) {
        arr.push(i + 1);
    }
    let i = 0;
    console.log(permute(arr, k, n));
};

var permute = function(nums, k, n) {
    let result = [];
    if (nums.length === 0) {
        console.log('nums======= in 0', nums)
        return [];
    }
    if ( nums.length === 1) {
        console.log('nums======= in 1', nums)
        return [nums];
    }

    for (let i = 0; i < nums.length; i++) {
        console.log('nums======= in loop', i, nums[i], nums)
        let currentNums = nums[i];
        console.log('currentNums======= in loop', currentNums)
        let remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
        console.log('remainingNums======= in loop', remainingNums)
        let permutatedNums = permute(remainingNums);
        console.log('permutatedNums======= in loop', permutatedNums)
        for (let permutateNum of permutatedNums) {
            const permutedArr = [currentNums].concat(permutateNum);
            console.log('permutedArr======= in loop', permutedArr)
            result.push(permutedArr);
            if (permutedArr.length === n) {
                k--;
                if (k === 0) {
                    return permutedArr;
                }
            }
        }
    }
    console.log('result=======', result)
    return result;
};

console.log(getPermutation(3, 1));