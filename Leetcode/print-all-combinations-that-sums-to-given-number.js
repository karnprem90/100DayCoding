/**
 * Write code to print all combinations of positive integers in increasing order that sum to a given positive number.
 *
 * For example,
 *
 * Input:  N = 3 1 1 11 23 Input:  N = 4 1 1 1 11 1 21 32 24 Input:  N = 5 1 1 1 1 11 1 1 21 1 31 2 21 42 35
 */


function printAllCombinationsThatSumsToGivenNumber(N) {
    let result = [];
    let prevVal = -1;
    function dfs(index, totalVal, nums) {
        if (totalVal > N) {
            return;
        }
        if (totalVal === N) {
            result.push([...nums]);
            return;
        }
        for (let i = index; i < N + 1; i++) {
            nums.push(i);
            if (nums.length > 1) {
                if (nums[nums.length - 2] > nums[nums.length - 1]) {
                    nums.pop();
                    continue;
                }
            }
            totalVal = nums.reduce((acc, val) => acc + val, 0);
            dfs(index, totalVal, nums);
            nums.pop();
        }
    }
    dfs(1, 0, []);
    return result;
}

console.log(printAllCombinationsThatSumsToGivenNumber(0));