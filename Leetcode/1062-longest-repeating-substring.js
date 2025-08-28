/**
 * Given a string s, return the length of the longest repeating substrings. If no repeating substring exists, return 0.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "abcd"
 * Output: 0
 * Explanation: There is no repeating substring.
 * Example 2:
 *
 * Input: s = "abbaba"
 * Output: 2
 * Explanation: The longest repeating substrings are "ab" and "ba", each of which occurs twice.
 * Example 3:
 *
 * Input: s = "aabcaabdaab"
 * Output: 3
 * Explanation: The longest repeating substring is "aab", which occurs 3 times.
 */

/**
 * @param {string} s
 * @return {number}
 */
function longestRepeatingSubstring_bruteforce(s) {
    const n = s.length;
    let maxLength = 0;

    // Try all possible substring lengths (from longest to shortest)
    for (let length = n; length > 0; length--) {
        // Try all possible starting positions for this length
        for (let i = 0; i <= n - length; i++) {
            const substring = s.substring(i, i + length);

            // Count how many times this substring appears
            let count = 0;
            for (let j = 0; j <= n - length; j++) {
                if (s.substring(j, j + length) === substring) {
                    count++;
                }
            }

            // If it appears more than once, we found a repeating substring
            if (count > 1) {
                maxLength = Math.max(maxLength, length);
                break; // Found longest for this length, try shorter
            }
        }
    }

    return maxLength;
}

// Test with examples
console.log(longestRepeatingSubstring_bruteforce("abcd"));        // Output: 0
console.log(longestRepeatingSubstring_bruteforce("abbaba"));      // Output: 2
console.log(longestRepeatingSubstring_bruteforce("aabcaabdaab")); // Output: 3