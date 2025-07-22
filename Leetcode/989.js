/**
 * The array-form of an integer num is an array representing its digits in left to right order.
 *
 * For example, for num = 1321, the array form is [1,3,2,1].
 * Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.
 *
 *
 *
 * Example 1:
 *
 * Input: num = [1,2,0,0], k = 34
 * Output: [1,2,3,4]
 * Explanation: 1200 + 34 = 1234
 * Example 2:
 *
 * Input: num = [2,7,4], k = 181
 * Output: [4,5,5]
 * Explanation: 274 + 181 = 455
 * Example 3:
 *
 * Input: num = [2,1,5], k = 806
 * Output: [1,0,2,1]
 * Explanation: 215 + 806 = 1021
 */

var addToArrayForm = function(num, k) {
    let carry = 0;
    let result = [];
    let n = num.length - 1;
    while ( n >=0 || k) {
        let val = k % 10
        k = Math.floor(k / 10);
        carry += (num[n] >= 0 ? num[n] : 0) + (val);
        if (carry > 9) {
            result.unshift(carry % 10);
        } else {
            result.unshift(carry);
        }
        carry = Math.floor(carry / 10);
        n--;
    }
    if (carry) {
        result.unshift(carry);
    }
    return result;
};
let arr = [0];
let k = 516;
console.log(addToArrayForm(arr, k));