var vowelConsonantScore = function (s) {
    let vowel = 0;
    let consonant = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u') {
            vowel++;
        } else if (s[i] === 'b' || s[i] === 'c' || s[i] === 'd' || s[i] === 'f' || s[i] === 'g' || s[i] === 'h' || s[i] === 'j' || s[i] === 'k' || s[i] === 'l' || s[i] === 'm' || s[i] === 'n' || s[i] === 'p' || s[i] === 'q' || s[i] === 'r' || s[i] === 's' || s[i] === 't' || s[i] === 'v' || s[i] === 'w' || s[i] === 'x' || s[i] === 'y' || s[i] === 'z') {
            consonant++;
        }
    }
    if (vowel === 0 || consonant === 0) {
        return 0;
    }
    if (vowel === 1 && consonant === 1) {
        return 1;
    }
    return Math.floor(vowel / consonant);
};

console.log(vowelConsonantScore("i3"));