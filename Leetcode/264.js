/**
 * An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.
 *
 * Given an integer n, return the nth ugly number.
 *
 *
 *
 * Example 1:
 *
 * Input: n = 10
 * Output: 12
 * Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.
 * Example 2:
 *
 * Input: n = 1
 * Output: 1
 * Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.
 */

var nthUglyNumber = function(n) {
    let i = 0;
    let num = 1;
    let count = 0;
    let finalNum = n + 1;
    while (finalNum) {
        let isUgly = firstPrimeFactor235(i);
        if (isUgly) {
            finalNum--;
        }
        count++;
        i += 1;
        console.log('------', i);
        console.log('++++++', n);
    }
    console.log(i);
    return i;
};

function firstPrimeFactor235(n) {
    if (n === 1) return true;
    if (n % 2 === 0) return true;
    if (n % 3 === 0) return true;
    return n % 5 === 0;
}

console.log(nthUglyNumber(10));