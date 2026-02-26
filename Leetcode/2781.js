/**
 * You are given a string word and an array of strings forbidden.
 * A string is called valid if none of its substrings are present in forbidden.
 * Return the length of the longest valid substring of the string word.
 *
 * Example 1:
 * Input: word = "cbaaaabc", forbidden = ["aaa","cb"]
 * Output: 4
 *
 * Example 2:
 * Input: word = "leetcode", forbidden = ["de","le","e"]
 * Output: 4
 */

var longestValidSubstring = function(word, forbidden) {
    // Step 1: Put all forbidden words in a Set for O(1) lookup
    const forbiddenSet = new Set(forbidden);

    let left = 0;
    let maxLen = 0;

    // Step 2: Move right pointer from left to right
    for (let right = 0; right < word.length; right++) {

        // Step 3: Check substrings ENDING at 'right', going back up to 10 chars
        // Why 10? Because forbidden[i].length <= 10
        for (let len = 1; len <= 10 && len <= right - left + 1; len++) {
            // Substring from (right - len + 1) to right
            const sub = word.substring(right - len + 1, right + 1);

            if (forbiddenSet.has(sub)) {
                // Found a forbidden word starting at (right - len + 1)
                // Move left PAST the start of this forbidden word
                left = Math.max(left, right - len + 2);
                break;  // No need to check longer substrings
            }
        }

        // Step 4: Update max window size
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};

console.log(longestValidSubstring("cbaaaabc", ["aaa", "cb"]));      // 4
console.log(longestValidSubstring("leetcode", ["de", "le", "e"]));  // 4