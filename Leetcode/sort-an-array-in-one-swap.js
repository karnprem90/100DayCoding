/**
 * Given an array where all its elements are sorted in increasing order except two swapped elements, sort it in linear time. Assume there are no duplicates in the array.
 *
 * For example,
 *
 * Input:  A[] = [3, 8, 6, 7, 5, 9] or [3, 5, 6, 9, 8, 7] or [3, 5, 7, 6, 8, 9] Output: A[] = [3, 5, 6, 7, 8, 9]
 */


function sortAnArrayInOneSwap(arr) {
    let i = 0;
    let swap = false;
    for (let i = 1; i < arr.length; i++) {
        if (swap) {
            return arr;
        }
        if (arr[i] > arr[i - 1] && !swap) {
            continue;
        }
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        swap = true;

    }
    return arr;
}

console.log(sortAnArrayInOneSwap([3, 5, 7, 6, 8, 9]));