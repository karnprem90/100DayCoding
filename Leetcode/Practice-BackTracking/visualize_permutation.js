var visualizePermutation = function(n, k) {
    console.log(`\n=== FINDING PERMUTATION ${k} OF [1..${n}] ===`);
    
    let factorial = [1];
    for (let i=1; i<=n; i++) factorial[i] = i * factorial[i-1];

    let nums = Array.from({length: n}, (v, i) => i+1);
    let res = "";

    // We process positions from left to right
    // i represents the number of digits remaining to be determined
    for (let i = n; i > 0; i--) {
        console.log(`\n--- Step: Picking digit for position ${n - i + 1} ---`);
        console.log(`Available numbers: [${nums.join(", ")}]`);
        console.log(`We need the ${k}-th permutation of these.`);
        
        let permutationsPerDigit = factorial[i - 1];
        console.log(`If we pick a number, there are ${permutationsPerDigit} permutations starting with it.`);
        
        // VISUALIZE THE BLOCKS
        console.log(`Let's see where ${k} falls:`);
        for(let j=0; j<nums.length; j++) {
            let start = (j * permutationsPerDigit) + 1;
            let end = (j + 1) * permutationsPerDigit;
            let label = nums[j];
            
            let mark = "";
            if (k >= start && k <= end) {
                mark = " <--- TARGET IS HERE (" + k + ")";
            }
            console.log(`  Block starting with ${label}: covers permutations ${start} to ${end}${mark}`);
        }

        let index = Math.ceil(k / permutationsPerDigit);
        console.log(`Calculation: ceil(${k} / ${permutationsPerDigit}) = ${index}`);
        console.log(`So we pick the ${index}-th available number: ${nums[index-1]}`);
        
        res += nums[index - 1];
        nums.splice(index - 1, 1);
        
        // UPDATE K
        let previousBlockCount = index - 1;
        let skippedPermutations = permutationsPerDigit * previousBlockCount;
        console.log(`We skipped ${previousBlockCount} full blocks (${skippedPermutations} permutations).`);
        k -= skippedPermutations;
        console.log(`New k for next step: ${k} (relative to the new smaller set)`);
        console.log(`Current result built so far: "${res}"`);
    }
    return res;
};

// Run it!
visualizePermutation(3, 3);
