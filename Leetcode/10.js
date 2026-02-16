
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    // Stack structure: [sIndex, pIndex]
    const stack = [[0, 0]];
    const visited = new Set();

    while (stack.length > 0) {
        const [si, pi] = stack.pop();
        const key = `${si},${pi}`;

        if (visited.has(key)) continue;
        visited.add(key);

        // Base case: if pattern is exhausted
        if (pi === p.length) {
            if (si === s.length) return true;
            continue;
        }

        // Check if current chars match
        const firstMatch = (si < s.length && (p[pi] === s[si] || p[pi] === '.'));

        // Look ahead for '*'
        if (pi + 1 < p.length && p[pi + 1] === '*') {
            stack.push([si, pi + 2]);

            if (firstMatch) {
                stack.push([si + 1, pi]);
            }
        } else {
            // Normal match
            if (firstMatch) {
                stack.push([si + 1, pi + 1]);
            }
        }
    }

    return false;
};

// Test cases
// console.log(isMatch("aa", "a"));    // false
// console.log(isMatch("aa", "a*"));   // true
// console.log(isMatch("ab", ".*"));   // true
console.log(isMatch("aab", "c*a*b")); // true
// console.log(isMatch("mississippi", "mis*is*p*.")); // false
