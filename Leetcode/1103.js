/**
 * 1103. Prime Arrangements
 * Formula: p! × (n - p)! mod (10^9 + 7)
 * where p = count of primes from 1 to n
 */

var numPrimeArrangements = function(n) {
    const MOD = BigInt(1e9 + 7);
    
    // Count primes using Sieve of Eratosthenes
    const countPrimes = (n) => {
        if (n < 2) return 0;
        const isPrime = new Array(n + 1).fill(true);
        isPrime[0] = isPrime[1] = false;
        
        for (let i = 2; i * i <= n; i++) {
            if (isPrime[i]) {
                for (let j = i * i; j <= n; j += i) {
                    isPrime[j] = false;
                }
            }
        }
        
        let count = 0;
        for (let i = 2; i <= n; i++) {
            if (isPrime[i]) count++;
        }
        return count;
    };
    
    // Factorial with mod - need BigInt for final multiplication
    const factorial = (num) => {
        let result = 1n;
        for (let i = 2; i <= num; i++) {
            result = (result * BigInt(i)) % MOD;
        }
        return result;
    };
    
    const p = countPrimes(n);
    return Number((factorial(p) * factorial(n - p)) % MOD);
};

// Test cases
console.log(numPrimeArrangements(5));   // Output: 12
console.log(numPrimeArrangements(100)); // Output: 682289015