var balancedStringSplit = function(s) {
    let rCount = 0;
    let lCount = 0;
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'R') {
            rCount++;
        } else {
            lCount++;
        }
        if (rCount === lCount) {
            lCount = 0;
            rCount = 0;
            count++;
        }
    }
    return count;
};

console.log(balancedStringSplit("RLRRLLRLRL"));
console.log(balancedStringSplit("RLRRRLLRLL"));
console.log(balancedStringSplit("LLLLRRRR"));