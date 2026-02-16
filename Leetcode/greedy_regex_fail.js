
/**
 * Attempting the "Linear/Greedy" approach as described:
 * Going through 'p' (pattern) and matching against 's' (string).
 * We maintain pointers for iterators.
 */
function isMatchGreedy(s, p) {
    let sIndex = 0; // Pointer for s
    let pIndex = 0; // Pointer for p

    console.log(`\nTesting: s="${s}", p="${p}"`);

    while (pIndex < p.length) {
        let charP = p[pIndex];
        // Check if next char is '*'
        let isStar = (pIndex + 1 < p.length && p[pIndex + 1] === '*');

        if (isStar) {
            console.log(`  Encountered '${charP}*': Trying to match greedily...`);
            // Greedy Strategy: Match as many characters in 's' as possible
            // that match 'charP'
            // Save start position for comparison (prevVal logic)
            let startS = sIndex;
            while (sIndex < s.length && (s[sIndex] === charP || charP === '.')) {
                sIndex++;
            }
            console.log(`    Matched '${s.substring(startS, sIndex)}' (indices ${startS} to ${sIndex-1})`);
            
            // Move pattern pointer past "char*"
            pIndex += 2; 
        } else {
            // Normal character match
            if (sIndex < s.length && (s[sIndex] === charP || charP === '.')) {
                console.log(`  Matched '${s[sIndex]}' with '${charP}'`);
                sIndex++;
                pIndex++;
            } else {
                console.log(`  Mismatch! Expected '${charP}', found '${s[sIndex]}'`);
                return false;
            }
        }
    }

    // Check if we consumed the entire string
    if (sIndex === s.length) {
        return true;
    } else {
        console.log(`  Result: False (Pattern finished but String has characters left: "${s.substring(sIndex)}")`);
        return false;
    }
}

console.log("--- Greedy Approach Demo ---");
// Works for simple cases
console.log("1. aa vs a*: ", isMatchGreedy("aa", "a*")); 

// Fails for cases requiring backtracking
// Expected: true (a* consumes "aa", leaving last "a" for the final "a")
console.log("2. aaa vs a*a: ", isMatchGreedy("aaa", "a*a")); 
