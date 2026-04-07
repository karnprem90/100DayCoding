/**
 * Given two strings s and t, return the number of distinct subsequences of s which equals t.

The test cases are generated so that the answer fits on a 32-bit signed integer.

 

Example 1:

Input: s = "rabbbit", t = "rabbit"
Output: 3
Explanation:
As shown below, there are 3 ways you can generate "rabbit" from s.
rabbbit
rabbbit
rabbbit
Example 2:

Input: s = "babgbag", t = "bag"
Output: 5
Explanation:
As shown below, there are 5 ways you can generate "bag" from s.
babgbag
babgbag
babgbag
babgbag
babgbag
 */

var numDistinct = function(s, t) {
    const memo = {};
    function helper(i, j) {
        // Matched all of t — found one valid way!
        if (j === t.length) return 1;
        // Ran out of s — no way to match
        if (i === s.length) return 0;
        const key = i + ',' + j;
        if (key in memo) return memo[key]; // 📖 Already solved? Reuse!
        let result = helper(i + 1, j);     // SKIP s[i]
        if (s[i] === t[j]) {
            result += helper(i + 1, j + 1); // USE s[i]
        }
        memo[key] = result;                // 📖 Save for later
        return result;
    }
    return helper(0, 0);
};

console.log(numDistinct("rabbbit", "rabbit"));
console.log(numDistinct("babgbag", "bag"));
