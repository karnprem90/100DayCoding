/**
 * Given a string s, return true if a permutation of the string could form a palindrome and false otherwise.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "code"
 * Output: false
 * Example 2:
 *
 * Input: s = "aab"
 * Output: true
 * Example 3:
 *
 * Input: s = "carerac"
 * Output: true
 *
 *
 * Constraints:
 *
 * 1 <= s.length <= 5000
 * s consists of only lowercase English letters.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    let map = {};
    let left = '';
    let right = '';
    let remaining = '';
    for (let char in s) {
        map[s[char]] = (map[s[char]] || 0) + 1;
    }
    for (let char in map) {
        if (map.hasOwnProperty(char) && map[char] >= 2) {
            while (map[char] >= 2) {
                left += char;
                right += char;
                map[char] -= 2;
            }
        }
        if (map[char]) {
            remaining += char;
        }
    }
    if (left !== right) {
        return false;
    }
    return remaining.length <= 1;

};

console.log(canPermutePalindrome("carerac"));
console.log(canPermutePalindrome("carerac")); // true
console.log(canPermutePalindrome("aab")); // true
console.log(canPermutePalindrome("code")); // false
console.log(canPermutePalindrome("aabbcc")); // true
console.log(canPermutePalindrome("aabbc")); // true
console.log(canPermutePalindrome("abc")); // false
console.log(canPermutePalindrome("aaaabbbb")); // true
console.log(canPermutePalindrome("a")); // true
console.log(canPermutePalindrome("aaabbbb")); // true
console.log(canPermutePalindrome("aaabbb")); // false
console.log(canPermutePalindrome("tactcoa")); // true
console.log(canPermutePalindrome("1122334455")); // true
console.log(canPermutePalindrome("abca")); // false
console.log(canPermutePalindrome("aabbccd")); // true
console.log(canPermutePalindrome("")); // true