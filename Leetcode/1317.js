/**
 * No-Zero integer is a positive integer that does not contain any 0 in its decimal representation.

Given an integer n, return a list of two integers [a, b] where:

a and b are No-Zero integers.
a + b = n
The test cases are generated so that there is at least one valid solution. If there are many valid solutions, you can return any of them.

 

Example 1:

Input: n = 2
Output: [1,1]
Explanation: Let a = 1 and b = 1.
Both a and b are no-zero integers, and a + b = 2 = n.
Example 2:

Input: n = 11
Output: [2,9]
Explanation: Let a = 2 and b = 9.
Both a and b are no-zero integers, and a + b = 11 = n.
Note that there are other valid answers as [8, 3] that can be accepted.
 */

/**
 * Optimized explanation:
 * 1. Numeric Check: Using modulo (%) and division (/) is much faster than converting numbers to strings (no heap allocation).
 * 2. Fail Fast: We check 'b' (the larger number) first because it has more digits and is more likely to contain a zero.
 */
var getNoZeroIntegers = function(n) {
    // Iterate 'a' from 1. 
    // We assume a valid pair exists near a=1, which is true for the problem constraints.
    for (let a = 1; a < n; a++) {
        let b = n - a;
        
        // Check b first since it's larger (more likely to fail)
        if (isNoZero(b) && isNoZero(a)) {
            return [a, b];
        }
    }
    return [];
};

// Numeric helper function - significantly faster than .toString().indexOf('0')
function isNoZero(num) {
    while (num > 0) {
        if (num % 10 === 0) return false;
        num = Math.floor(num / 10);
    }
    return true;
}

// Test cases
console.log("n = 2:", getNoZeroIntegers(2));      // [1, 1]
console.log("n = 11:", getNoZeroIntegers(11));    // [2, 9] (or similar)
console.log("n = 1000:", getNoZeroIntegers(1000)); // Found quickly
console.log("n = 10000:", getNoZeroIntegers(10000));