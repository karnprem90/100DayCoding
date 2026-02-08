var maxNumberOfBalloons = function (text) {
    let m = {};
    for (let char of text) {
        m[char] = (m[char] || 0) + 1;
    }
    
    return Math.min(
        m['b'] || 0,
        m['a'] || 0,
        Math.floor((m['l'] || 0) / 2),
        Math.floor((m['o'] || 0) / 2),
        m['n'] || 0
    );
};1

console.log(maxNumberOfBalloons("nlaebolko"));
