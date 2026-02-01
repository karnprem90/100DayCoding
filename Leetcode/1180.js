var countLetters = function(s) {
    if (s.length === 0) return 0;
    
    let totalSum = 0;
    let count = 1;  // Start at 1 for the first character
    
    for (let i = 1; i <= s.length; i++) {
        if (s[i] === s[i - 1]) {
            count++;
        } else {
            totalSum += (count * (count + 1)) / 2;
            count = 1;
        }
    }
    
    return totalSum;
};

console.log(countLetters("aaaba"));      // Output: 8
console.log(countLetters("aaaaaaaaaa")); // Output: 55