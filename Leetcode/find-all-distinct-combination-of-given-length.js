/**
 * Given an integer array, find all distinct combinations of a given length k.
 *
 * For example,
 *
 * Input:  {2, 3, 4}, k = 2
 * Output: {2, 3}, {2, 4}, {3, 4}
 * Input:  {1, 2, 1}, k = 2
 * Output: {1, 2}, {1, 1}, {2, 1}
 * The program should print all the distinct combinations, while preserving the relative order of elements as they appear in the array.
 */


function findAllDistinctCombinationOfGivenLength(arr, k ) {
    let result = [];
    let seen = new Set();
    function dfs(currentCombination, startIndex) {
        if (currentCombination.length === k) {
            let combinationStr = JSON.stringify(currentCombination);
            if (!seen.has(combinationStr)) {
                seen.add(combinationStr);
                result.push([...currentCombination]);
            }
            return;
        }
        // Prune unnecessary calls
        if (currentCombination.length + (arr.length - startIndex) < k) {
            return;
        }
        for (let i = startIndex; i < arr.length; i++) {
            currentCombination.push(arr[i]);
            dfs(currentCombination, i + 1); // FIX: Use i+1 here
            currentCombination.pop();
        }
    }
    dfs([], 0);
    return result;
}

console.log(findAllDistinctCombinationOfGivenLength([2,3,4], 2));
// Output: [ [ 2, 3 ], [ 2, 4 ], [ 3, 4 ] ]
console.log(findAllDistinctCombinationOfGivenLength([1,2,1], 2));
// Output: [ [ 1, 2 ], [ 1, 1 ], [ 2, 1 ] ]


console.log(findAllDistinctCombinationOfGivenLength([2,3,4], 2));