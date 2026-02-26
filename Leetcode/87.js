var isScramble = function(s1, s2) {
    if (s1.length !== s2.length) return false;
    if (s1 === s2) return true;

    let count = Array(26).fill(0);
    for (let i = 0; i < s1.length; i++) {
        count[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
    for (let i = 0; i < 26; i++) {
        if (count[i] !== 0) return false;
    }

    for (let i = 1; i < s1.length; i++) {
        if (isScramble(s1.slice(0, i), s2.slice(0, i)) && isScramble(s1.slice(i), s2.slice(i))) {
            return true;
        }
        if (isScramble(s1.slice(0, i), s2.slice(s2.length - i)) && isScramble(s1.slice(i), s2.slice(0, s2.length - i))) {
            return true;
        }
    }
    return false;    
};

console.log(isScramble("great", "rgeat"));
console.log(isScramble("abcde", "caebd"));
