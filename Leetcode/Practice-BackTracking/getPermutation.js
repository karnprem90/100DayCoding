var getPermutation = function(n, k) {
    let factorial = [1];
    for (let i=1;i<=n;i++) factorial[i]= i * factorial[i-1];

    let nums = Array.from({length: n}, (v, i) => i+1);
    let res = "";
    // k is 1-indexed initially. 
    // Example: n=3, k=3 means we want the 3rd permutation.
    
    // We iterate from n down to 1 (deciding each digit one by one)
    for (let i=n; i>0; i--) {
        // 1. Calculate the size of each "branch" of permutations starting with a specific number.
        // If we pick a number, there are (i-1)! permutations following it.
        let branchSize = factorial[i - 1];

        // 2. Figure out WHICH branch contains our k-th permutation.
        // We do this by seeing how many full branches of size 'branchSize' fit into k.
        // Math.ceil(3 / 2) = 2. So we are in the 2nd branch.
        let branchIndex = Math.ceil(k / branchSize);

        // 3. Add the number that heads this branch to our result.
        // branchIndex is 1-based, so we subtract 1 for array access.
        res += nums[branchIndex - 1];
        
        // 4. Remove this number from the pool. It's used.
        nums.splice(branchIndex - 1, 1);

        // 5. Update k for the next level.
        // We "skipped" over (branchIndex - 1) full branches.
        // So we subtract those permutations from k to find the relative position in the NEW branch.
        k -= (branchSize * (branchIndex - 1));
    }
    return res;
};

console.log(getPermutation(3, 3));
