/**
 * Given a positive integer n, print all combinations of numbers between 1 and n having sum n.
 *
 * For example,
 *
 * For n = 5, the following combinations are possible: { 5 }{ 1, 4 }{ 2, 3 }{ 1, 1, 3 }{ 1, 2, 2 }{ 1, 1, 1, 2 }{ 1, 1, 1, 1, 1 }
 * For n = 4, the following combinations are possible: { 4 }{ 1, 3 }{ 2, 2 }{ 1, 1, 2 }{ 1, 1, 1, 1 }
 */

function printCombinations(n, combo = [], start = 1) {
    if (n === 0) {
        console.log(combo.join(' '));
        return;
    }
    for (let i = start; i <= n; i++) {
        combo.push(i);
        printCombinations(n - i, combo, i); // allow same value again (i)
        combo.pop();
    }
}

console.log(printCombinations((5)))