var addBoldTag = function(s, words) {
    const n = s.length;
    const bold = new Array(n).fill(false);
    for (const word of words) {
        if (!word.length) {
            continue;
        }
        let start = 0;
        while(true) {
            const pos = s.indexOf(word, start);
            if (pos === -1) {
                break;
            }
            for (let i = pos; i < pos + word.length; i++) {
                bold[i] = true;
            }
            start = pos + 1;
        }
    }    
    let result = '';
    for (let i = 0; i < n; i++) {
        if (bold[i]) {
            if (i === 0 || !bold[i - 1]) {
                result += '<b>';
            }
            result += s[i];
            if (i === n - 1 || !bold[i + 1]) {
                result += '</b>';
            }
        } else {
            result += s[i];
        }
    }
    return result;
}
console.log(addBoldTag('abcxyz123', ["abc","123"]))