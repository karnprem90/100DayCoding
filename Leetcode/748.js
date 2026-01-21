var shortestCompletingWord = function(licensePlate, words) {
    // Use array for O(1) access instead of object
    // Index 0 = 'a', Index 1 = 'b', ... Index 25 = 'z'
    const required = new Array(26).fill(0);
    let requiredCount = 0;
    
    // Example: licensePlate = "1s3 PSt"
    // Loop: '1'(skip), 's'→required[18]++, '3'(skip), ' '(skip), 
    //       'P'→'p'→required[15]++, 'S'→'s'→required[18]++, 't'→required[19]++
    // Result: required[15]=1(p), required[18]=2(s), required[19]=1(t)
    // requiredCount = 4 (total letters needed: s,s,p,t)
    for (let char of licensePlate) {
        const code = char.toLowerCase().charCodeAt(0) - 97;
        if (code >= 0 && code < 26) {
            required[code]++;
            requiredCount++;
        }
    }
    
    // Sort by length to find shortest valid word first
    // ["step", "steps", "stripe", "stepple"] → ["step", "steps", "stripe", "stepple"]
    // (already sorted by length: 4, 5, 6, 7)
    words.sort((a, b) => a.length - b.length);
    
    for (let word of words) {
        // Skip if word is too short to contain all required letters
        // "step".length(4) >= requiredCount(4) ✓ continue checking
        if (word.length < requiredCount) continue;
        
        // Copy required counts for this word's check
        // count = [0,0,...,1(p),...,2(s),1(t),...] (copy of required)
        const count = required.slice();
        let remaining = requiredCount; // remaining = 4
        
        // Check word "step": s-t-e-p
        // 's': count[18]=2>0 → count[18]--, remaining=3
        // 't': count[19]=1>0 → count[19]--, remaining=2  
        // 'e': count[4]=0, skip
        // 'p': count[15]=1>0 → count[15]--, remaining=1
        // Loop ends, remaining=1 (need one more 's') → NOT VALID
        
        // Check word "steps": s-t-e-p-s
        // 's': count[18]=2>0 → count[18]=1, remaining=3
        // 't': count[19]=1>0 → count[19]=0, remaining=2
        // 'e': count[4]=0, skip
        // 'p': count[15]=1>0 → count[15]=0, remaining=1
        // 's': count[18]=1>0 → count[18]=0, remaining=0 → RETURN "steps"!
        for (let char of word) {
            const code = char.charCodeAt(0) - 97;
            if (count[code] > 0) {
                count[code]--;
                remaining--;
                if (remaining === 0) return word; // All letters found!
            }
        }
    }
    return '';
};

console.log(shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"])); // "steps"
console.log(shortestCompletingWord("1s3 456", ["looks", "pest", "stew", "show"])); // "pest"