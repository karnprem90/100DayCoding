/**
 * Let's define a function countUniqueChars(s) that returns the number of unique characters in s.
 *
 * For example, calling countUniqueChars(s) if s = "LEETCODE" then "L", "T", "C", "O", "D" are the unique characters since they appear only once in s, therefore countUniqueChars(s) = 5.
 * Given a string s, return the sum of countUniqueChars(t) where t is a substring of s. The test cases are generated such that the answer fits in a 32-bit integer.
 *
 * Notice that some substrings can be repeated so in this case you have to count the repeated ones too.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "ABC"
 * Output: 10
 * Explanation: All possible substrings are: "A","B","C","AB","BC" and "ABC".
 * Every substring is composed with only unique letters.
 * Sum of lengths of all substring is 1 + 1 + 1 + 2 + 2 + 3 = 10
 * Example 2:
 *
 * Input: s = "ABA"
 * Output: 8
 * Explanation: The same as example 1, except countUniqueChars("ABA") = 1.
 * Example 3:
 *
 * Input: s = "LEETCODE"
 * Output: 92
 */

/**
 * @param {string} s
 * @return {number}
 */
function uniqueLetterString(s) {
    const n = s.length;
    const indexMap = new Map();

    // Step 1: Collect positions of each character
    for (let i = 0; i < n; i++) {
        const ch = s[i];
        if (!indexMap.has(ch)) indexMap.set(ch, []);
        indexMap.get(ch).push(i);
    }

    let total = 0;

    // Step 2: For each character, compute contributions
    for (const [ch, positions] of indexMap.entries()) {
        // Add sentinel values at -1 and n for easier calculation
        positions.unshift(-1);
        positions.push(n);

        // Now loop over real occurrences (skip sentinels)
        for (let k = 1; k < positions.length - 1; k++) {
            const prev = positions[k - 1];
            const curr = positions[k];
            const next = positions[k + 1];

            total += (curr - prev) * (next - curr);
        }
    }

    return total;
}

// Examples
console.log(uniqueLetterString("LEETCODE")); // 92
