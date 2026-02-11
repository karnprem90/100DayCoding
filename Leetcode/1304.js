var sumZero = function(n) {
    if (n === 1) {
        return [0];
    }
    let val = n;
    let result = [];
    while (n >= 2) {
        result.push(n);
        result.push(-n);
        n = n - 2;
    }
    if (n > 0) {
        result.push(0);
    }
    
    return result;
};

// Test cases
const testCases = [1, 2, 3, 4, 5, 7];

testCases.forEach(n => {
    const result = sumZero(n);
    const sum = result.reduce((a, b) => a + b, 0);
    console.log(`n = ${n} → [${result}] | length: ${result.length} | sum: ${sum} | valid: ${result.length === n && sum === 0}`);
});