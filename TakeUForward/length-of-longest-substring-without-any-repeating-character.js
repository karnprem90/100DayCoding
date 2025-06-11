function longestSubstringWithoutAnyRepeater(string) {
    let map = new Map();
    let count = 0;
    let longestSubString = 0;
    for (let i = 0; i < string.length; i++) {
        if (map.has(string[i])) {
            count = Math.max(count, longestSubString);
            map.clear();
            longestSubString = 0;
        } else {
            longestSubString++;
            map.set(string[i], true);
        }
    }
    return count;
}


console.log(longestSubstringWithoutAnyRepeater("bbbbb"));