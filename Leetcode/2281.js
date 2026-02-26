/**As the ruler of a kingdom, you have an army of wizards at your command.

You are given a 0-indexed integer array strength, where strength[i] denotes the strength of the ith wizard. For a contiguous group of wizards (i.e. the wizards' strengths form a subarray of strength), the total strength is defined as the product of the following two values:

The strength of the weakest wizard in the group.
The total of all the individual strengths of the wizards in the group.
Return the sum of the total strengths of all contiguous groups of wizards. Since the answer may be very large, return it modulo 109 + 7.

A subarray is a contiguous non-empty sequence of elements within an array.

 

Example 1:

Input: strength = [1,3,1,2]
Output: 44
Explanation: The following are all the contiguous groups of wizards:
- [1] from [1,3,1,2] has a total strength of min([1]) * sum([1]) = 1 * 1 = 1
- [3] from [1,3,1,2] has a total strength of min([3]) * sum([3]) = 3 * 3 = 9
- [1] from [1,3,1,2] has a total strength of min([1]) * sum([1]) = 1 * 1 = 1
- [2] from [1,3,1,2] has a total strength of min([2]) * sum([2]) = 2 * 2 = 4
- [1,3] from [1,3,1,2] has a total strength of min([1,3]) * sum([1,3]) = 1 * 4 = 4
- [3,1] from [1,3,1,2] has a total strength of min([3,1]) * sum([3,1]) = 1 * 4 = 4
- [1,2] from [1,3,1,2] has a total strength of min([1,2]) * sum([1,2]) = 1 * 3 = 3
- [1,3,1] from [1,3,1,2] has a total strength of min([1,3,1]) * sum([1,3,1]) = 1 * 5 = 5
- [3,1,2] from [1,3,1,2] has a total strength of min([3,1,2]) * sum([3,1,2]) = 1 * 6 = 6
- [1,3,1,2] from [1,3,1,2] has a total strength of min([1,3,1,2]) * sum([1,3,1,2]) = 1 * 7 = 7
The sum of all the total strengths is 1 + 9 + 1 + 4 + 4 + 4 + 3 + 5 + 6 + 7 = 44.
Example 2:

Input: strength = [5,4,6]
Output: 213
Explanation: The following are all the contiguous groups of wizards: 
- [5] from [5,4,6] has a total strength of min([5]) * sum([5]) = 5 * 5 = 25
- [4] from [5,4,6] has a total strength of min([4]) * sum([4]) = 4 * 4 = 16
- [6] from [5,4,6] has a total strength of min([6]) * sum([6]) = 6 * 6 = 36
- [5,4] from [5,4,6] has a total strength of min([5,4]) * sum([5,4]) = 4 * 9 = 36
- [4,6] from [5,4,6] has a total strength of min([4,6]) * sum([4,6]) = 4 * 10 = 40
- [5,4,6] from [5,4,6] has a total strength of min([5,4,6]) * sum([5,4,6]) = 4 * 15 = 60
The sum of all the total strengths is 25 + 16 + 36 + 36 + 40 + 60 = 213.
 

Constraints:

1 <= strength.length <= 105
1 <= strength[i] <= 109
 * 
 * @param {*} strength 
 * @returns 
 */


var totalStrength = function(strength) {
    const n = strength.length;
    const MOD = BigInt(1e9 + 7);

    // Convert to BigInt for modular arithmetic
    const s = strength.map(BigInt);

    // Step 1: Prefix sums
    // prefix[i] = s[0] + s[1] + ... + s[i-1]
    const prefix = new Array(n + 1).fill(0n);
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + s[i];
    }

    // Step 2: Prefix sum of prefix sums
    // pp[i] = prefix[0] + prefix[1] + ... + prefix[i-1]
    const pp = new Array(n + 2).fill(0n);
    for (let i = 0; i <= n; i++) {
        pp[i + 1] = pp[i] + prefix[i];
    }

    // Step 3: Monotonic stack to find left[] and right[]
    const left = new Array(n).fill(-1);   // previous strictly smaller
    const right = new Array(n).fill(n);   // next smaller or equal
    const stack = [];

    // Find left[i]: nearest smaller to the left (strict <)
    for (let i = 0; i < n; i++) {
        while (stack.length && strength[stack[stack.length - 1]] >= strength[i]) {
            stack.pop();
        }
        left[i] = stack.length ? stack[stack.length - 1] : -1;
        stack.push(i);
    }

    // Find right[i]: nearest smaller-or-equal to the right (≤)
    stack.length = 0;
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && strength[stack[stack.length - 1]] > strength[i]) {
            stack.pop();
        }
        right[i] = stack.length ? stack[stack.length - 1] : n;
        stack.push(i);
    }

    // Step 4: Compute total
    let result = 0n;
    for (let i = 0; i < n; i++) {
        const L = BigInt(left[i] + 1);
        const R = BigInt(right[i] - 1);
        const bi = BigInt(i);

        // Number of choices for left bound and right bound
        const leftCount = bi - L + 1n;
        const rightCount = R - bi + 1n;

        // Sum of all subarray sums where i is the minimum
        const rightSum = pp[Number(R) + 2] - pp[i + 1];
        const leftSum = pp[i + 1] - pp[Number(L)];

        const totalSubarraySum = (
            leftCount % MOD * (rightSum % MOD) % MOD -
            rightCount % MOD * (leftSum % MOD) % MOD +
            MOD * MOD
        ) % MOD;

        result = (result + s[i] % MOD * totalSubarraySum % MOD) % MOD;
    }

    return Number(result);
};

console.log(totalStrength([1,3,1,2]));    // 44
console.log(totalStrength([5,4,6]));      // 213

