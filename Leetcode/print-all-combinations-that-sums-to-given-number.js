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
    function dfs(index, remaining, nums) {
        if (remaining === 0) {
            result.push([...nums]);
            return;
        }
        for (let i = index; i <= remaining + 1; i++) {
            nums.push(i);
            dfs(i, remaining - i, nums);
            nums.pop();
        }
    }
    dfs(1, N, []);
    return result;
}

console.log(printAllCombinationsThatSumsToGivenNumber(5));