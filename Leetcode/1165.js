var calculateTime = function(keyboard, word) {
    let arr = new Array(26).fill(0);
    for (let i = 0; i < keyboard.length; i++) {
        let charCode = keyboard[i].charCodeAt();
        arr[charCode - 97] = i;
    }
    let time = 0;
    let prev = 0;
    for (let i = 0; i < word.length; i++) {
        const curr = arr[word[i].charCodeAt() - 97];
        time += Math.abs(curr - prev);
        prev = curr;
    }
    return time;
};

console.log(calculateTime("abcdefghijklmnopqrstuvwxyz", "cba"));
console.log(calculateTime("pqrstuvwxyzabcdefghijklmno", "leetcode"));