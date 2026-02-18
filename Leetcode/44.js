/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let i = 0; // pointer for string s
    let j = 0; // pointer for pattern p
    let starIdx = -1; // index of the last '*' found in p
    let matchIdx = -1; // index in s where we started matching against '*'

    while (i < s.length) {
        // Case 1: Characters match or pattern has '?'
        if (j < p.length && (p[j] === '?' || p[j] === s[i])) {
            i++;
            j++;
        }
        // Case 2: Pattern has '*'
        else if (j < p.length && p[j] === '*') {
            starIdx = j;      // Save Point: Remember where '*' is
            matchIdx = i;     // Save Point: Remember where we are in s
            j++;              // Advance pattern (assume '*' matches 0 chars initially)
        }
        // Case 3: Mismatch, but we have a previous '*' to backtrack to
        else if (starIdx !== -1) {
            j = starIdx + 1;  // Reset pattern to just after '*'
            matchIdx++;       // Consume one character from s for the '*'
            i = matchIdx;     // Reset s pointer to the new match position
        }
        // Case 4: Mismatch and no '*' to backtrack to
        else {
            return false;
        }
    }

    // Check if remaining characters in p are all '*'
    while (j < p.length && p[j] === '*') {
        j++;
    }

    return j === p.length;
};

// Test cases
// console.log(isMatch("aa", "a")); // false
// console.log(isMatch("aa", "*")); // true
// console.log(isMatch("cb", "?a")); // false
console.log(isMatch("adceb", "*a*b")); // true
// console.log(isMatch("acdcb", "a*c?b")); // false