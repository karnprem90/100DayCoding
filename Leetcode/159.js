/**
 * Given a string s, return the length of the longest substring that contains at most two distinct characters.

 

Example 1:

Input: s = "eceba"
Output: 3
Explanation: The substring is "ece" which its length is 3.
Example 2:

Input: s = "ccaabbb"
Output: 5
Explanation: The substring is "aabbb" which its length is 5.
 

Constraints:

1 <= s.length <= 105
s consists of English letters.
 */

var lengthOfLongestSubstringTwoDistinct = function(s) {
    if (s.length === 0) return 0;

    let left = 0;
    let maxLen = 0;
    let lastChangeIdx = 0; // your "currentWindow" idea — where the last char switch happened
    let char1 = null;
    let char2 = null;

    for (let right = 0; right < s.length; right++) {
        // 3rd distinct character found → evict the older one
        if (char2 !== null && s[right] !== char1 && s[right] !== char2) {
            left = lastChangeIdx;       // jump left to where the last contiguous run started
            char1 = s[right - 1];       // keep the char that was adjacent to the new one
            char2 = s[right];           // the new char
        }

        // Track where the character changes (start of current contiguous run)
        if (right > 0 && s[right] !== s[right - 1]) {
            lastChangeIdx = right;
        }

        // Initialize the two character slots
        if (char1 === null) {
            char1 = s[right];
        } else if (char2 === null && s[right] !== char1) {
            char2 = s[right];
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};

console.log(lengthOfLongestSubstringTwoDistinct("eceba"));   // 3
console.log(lengthOfLongestSubstringTwoDistinct("ccaabbb")); // 5
console.log(lengthOfLongestSubstringTwoDistinct("a"));       // 1