/**
 * Given an integer array, find the minimum product among all combinations of triplets in the array.
 *
 * For example,
 *
 * Input:  { 4, -1, 3, 5, 9 }Output: The minimum product is -45 (-1, 5, 9)  Input:  { 1, 4, 10, -2, 4 }Output: The minimum product is -80 (10, 4, -2)  Input:  { 3, 4, 1, 2, 5 }Output: The minimum product is 6 (3, 1, 2)
 */
function minimumProductAmongAllCombinationsOfTriplet(arr) {
    let minProduct = Infinity;
    function dfs(index, nums) {
        if (nums.length === 3) {
            const product = nums.reduce((acc, curr) => acc * curr, 1);
            minProduct = Math.min(minProduct, product);
            return;
        }
        if (nums.length > 3) {
            nums.pop();
            return;
        }
        for (let i = index; i < arr.length; i++) {
            nums.push(arr[i]);
            dfs(i + 1, nums);
            nums.pop();
        }
    }

    dfs(0, []);
    return minProduct;
}
let arr = [ 4, -1, 3, 5, 9]
let arr1 = [1, 4, 10, -2, 4 ];
let arr2 = [3, 4, 1, 2, 5]
console.log(minimumProductAmongAllCombinationsOfTriplet(arr));
console.log(minimumProductAmongAllCombinationsOfTriplet(arr1));
console.log(minimumProductAmongAllCombinationsOfTriplet(arr2));

