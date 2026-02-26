/**
 * Given a string formula representing a chemical formula, return the count of each atom.

The atomic element always starts with an uppercase character, then zero or more lowercase letters, representing the name.

One or more digits representing that element's count may follow if the count is greater than 1. If the count is 1, no digits will follow.

For example, "H2O" and "H2O2" are possible, but "H1O2" is impossible.
Two formulas are concatenated together to produce another formula.

For example, "H2O2He3Mg4" is also a formula.
A formula placed in parentheses, and a count (optionally added) is also a formula.

For example, "(H2O2)" and "(H2O2)3" are formulas.
Return the count of all elements as a string in the following form: the first name (in sorted order), followed by its count (if that count is more than 1), followed by the second name (in sorted order), followed by its count (if that count is more than 1), and so on.

The test cases are generated so that all the values in the output fit in a 32-bit integer.

Example 1:

Input: formula = "H2O"
Output: "H2O"
Explanation: The count of elements are {'H': 2, 'O': 1}.
Example 2:

Input: formula = "Mg(OH)2"
Output: "H2MgO2"
Explanation: The count of elements are {'H': 2, 'Mg': 1, 'O': 2}.
Example 3:

Input: formula = "K4(ON(SO3)2)2"
Output: "K4N2O14S4"
Explanation: The count of elements are {'K': 4, 'N': 2, 'O': 14, 'S': 4}.
 */

function countOfAtoms(formula) {
    let stack = [];
    let i = 0;

    while (i < formula.length) {
        if (formula[i] === '(') {
            // Push marker onto stack
            stack.push('(');
            i++;

        } else if (formula[i] === ')') {
            i++;

            // Collect multiplier after ')'
            let count = 0;
            while (i < formula.length && /[0-9]/.test(formula[i])) {
                count = count * 10 + Number(formula[i]);
                i++;
            }
            if (count === 0) count = 1;

            // Pop until we find '('
            let temp = [];
            while (stack[stack.length - 1] !== '(') {
                temp.push(stack.pop());
            }
            stack.pop(); // remove the '('

            // Multiply each popped element's count and push back
            for (let [name, c] of temp) {
                stack.push([name, c * count]);
            }

        } else {
            // It's an uppercase letter — start of element name
            let name = formula[i];
            i++;

            // Collect lowercase letters
            while (i < formula.length && /[a-z]/.test(formula[i])) {
                name += formula[i];
                i++;
            }

            // Collect digits (default 1)
            let count = 0;
            while (i < formula.length && /[0-9]/.test(formula[i])) {
                count = count * 10 + Number(formula[i]);
                i++;
            }
            if (count === 0) count = 1;

            stack.push([name, count]);
        }
    }

    // Merge all [name, count] pairs into a map
    let map = {};
    for (let [name, count] of stack) {
        map[name] = (map[name] || 0) + count;
    }

    // Sort keys alphabetically and build result
    let result = '';
    for (let key of Object.keys(map).sort()) {
        result += key;
        if (map[key] > 1) result += map[key];
    }

    return result;
}

console.log(countOfAtoms("H2O"));           // "H2O"
console.log(countOfAtoms("Mg(OH)2"));       // "H2MgO2"
console.log(countOfAtoms("K4(ON(SO3)2)2")); // "K4N2O14S4"

// ========== Minimum Number of Taps ==========

var minTaps = function(n, ranges) {
    // Step 1: Convert each tap into an interval [minRange, maxRange]
    let rangeValues = [];
    for (let i = 0; i < ranges.length; i++) {
        const minRange = Math.max(0, i - ranges[i]); // clip to 0
        const maxRange = Math.min(n, i + ranges[i]); // clip to n
        rangeValues.push({ minRange, maxRange });
    }

    // Step 2: Sort by minRange (start of interval)
    rangeValues.sort((a, b) => a.minRange - b.minRange);

    // Step 3: Greedy — pick the tap that reaches farthest
    let count = 0;
    let currentEnd = 0;  // how far we've covered
    let farthest = 0;    // farthest we can reach among current options
    let i = 0;

    while (currentEnd < n) {
        // Browse all taps that start within our current coverage
        while (i < rangeValues.length && rangeValues[i].minRange <= currentEnd) {
            farthest = Math.max(farthest, rangeValues[i].maxRange);
            i++;
        }

        // If farthest didn't improve, there's a gap — impossible!
        if (farthest === currentEnd) return -1;

        // Pick the best tap we found, extend coverage
        count++;
        currentEnd = farthest;
    }

    return count;
};

console.log(minTaps(5, [3,4,1,1,0,0]));    // 1
console.log(minTaps(3, [0,0,0,0]));         // -1
console.log(minTaps(3, [1,1,1,1]));         // 2
console.log(minTaps(9, [1,1,1,1,1,1,1,1,1,1])); // 5