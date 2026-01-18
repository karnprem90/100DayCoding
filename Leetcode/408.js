var validWordAbbreviation = function(word, abbr) {
    let left = 0;
    let right = 0;
    while (left < word.length) {
        if (word[left] === abbr[right]) {
            left++;
            right++;
        } else if (!isNaN(abbr[right])) {
            let count = 0;
            let i = right;
            while (i < abbr.length && !isNaN(abbr[i])) {
                count = count * 10 + parseInt(abbr[i]);
                if (count === 0) {
                    return false;
                }
                i++;
            }
            left += count;
            right = i;
        } else {
            return false;
        }
    }
    return left === word.length && right === abbr.length;
};
console.log(validWordAbbreviation("apple", "a2e")); // false
console.log(validWordAbbreviation("internationalization", "i12iz4n")); // true
// console.log(validWordAbbreviation("substitution", "s10n")); // true
// console.log(validWordAbbreviation("substitution", "sub4u4")); // true
console.log(validWordAbbreviation("substitution", "12")); // true
console.log(validWordAbbreviation("word", "w0rd")); // false
console.log(validWordAbbreviation("word", "3e")); // false

