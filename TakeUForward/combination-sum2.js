function combinationSum2(nums, target) {
    let result = [];
    nums.sort((a, b) => a - b);
    function helper(index, comb, value) {
        if (value === target) {
            result.push([...comb]);
            return;
        }
        if (value > target || index >= arr.length) {
            return;
        }

        for (let i = index; i < nums.length; i++) {
            if (i > index && nums[i] === nums[i - 1]) {
                continue;
            }

            if (value + nums[i] > target) {
                break;
            }

            comb.push(nums[i]);
            helper(i + 1, comb, value + nums[i]);
            comb.pop();
        }
    }

    helper(0, [], 0);
    return result;
}


const arr= [10,1,2,7,6,1,5];
const target = 8
console.log(combinationSum2(arr, target));