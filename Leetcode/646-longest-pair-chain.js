/**
 * You are given an array of n pairs pairs where pairs[i] = [lefti, righti] and lefti < righti.
 *
 * A pair p2 = [c, d] follows a pair p1 = [a, b] if b < c. A chain of pairs can be formed in this fashion.
 *
 * Return the length longest chain which can be formed.
 *
 * You do not need to use up all the given intervals. You can select pairs in any order.
 *
 *
 *
 * Example 1:
 *
 * Input: pairs = [[1,2],[2,3],[3,4]]
 * Output: 2
 * Explanation: The longest chain is [1,2] -> [3,4].
 * Example 2:
 *
 * Input: pairs = [[1,2],[7,8],[4,5]]
 * Output: 3
 * Explanation: The longest chain is [1,2] -> [4,5] -> [7,8].
 *
 *
 * Constraints:
 *
 * n == pairs.length
 * 1 <= n <= 1000
 * -1000 <= lefti < righti <= 1000
 */

var findLongestChain = function(pairs) {
    pairs = pairs.sort((a, b) => a[1] - b[1]);

    let currentVal = Number.MIN_SAFE_INTEGER;
    let longestChain = 0;

    for (let [start, end] of pairs) {
        if (currentVal < start) {
            currentVal = end;
            longestChain++;
        }
    }

    return longestChain;

};


console.log(findLongestChain([[1,2],[7,8],[4,5]]));     // 3
console.log(findLongestChain([[1,2],[2,3]]));           // 1
console.log(findLongestChain([[1,2],[2,3],[3,4],[4,5]])); // 2
// console.log(findLongestChain([[-5,-3],[-4,-1],[-2,0],[1,2]])); // 3
// console.log(findLongestChain([[5,24],[39,60],[15,28],[27,40],[50,90]])); // 3
// console.log(findLongestChain([[1,10],[1,10],[10,20]])); // 1
// console.log(findLongestChain([[1,100],[2,3],[4,5],[6,7],[8,9]])); // 4
// console.log(findLongestChain([[1,2],[2,3],[3,5],[5,8],[9,10]])); // 3
// console.log(findLongestChain([[1,100],[2,99],[3,98],[4,97]])); // 1
// console.log(findLongestChain([[1,2],[3,4],[5,6],[7,8],[9,10]])); // 5