/**
 * Given an array of pairs of integers, find all symmetric pairs, i.e., pairs that mirror each other. For instance, pairs (x, y) and (y, x) are mirrors of each other.
 *
 * For example,
 *
 * Input:  {3, 4}, {1, 2}, {5, 2}, {7, 10}, {4, 3}, {2, 5} Output: {4, 3} | {3, 4}{2, 5} | {5, 2}
 */

function findAllSymmetricPairsInArrayOfPairs(arr) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i].join('');
        if (map.has(num)) {
            console.log(map.get(num));
        } else {
            let val = arr[i].reverse().join('');
            map.set(val, num);
        }
    }
}
let arr = [[3,4], [1,2],[5,2], [7,10], [4,3], [2,5]];
console.log(findAllSymmetricPairsInArrayOfPairs(arr))