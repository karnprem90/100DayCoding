/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let res = [];
    let cur = [];
    let num_of_letters = 0;

    for (let w of words) {
        // If adding current word exceeds maxWidth (accounting for at least 1 space between words)
        // maxWidth - (current letters) - (new word len) - (current number of gaps, i.e., cur.length)
        if (w.length + cur.length + num_of_letters > maxWidth) {
            // Distribute spaces evenly among gaps
            // Gaps exist between words. If 3 words, 2 gaps. Indices 0 and 1.
            // If 1 word, 0 gaps. Special handling '|| 1' treats single word as 1 gap (padding right).
            for (let i = 0; i < maxWidth - num_of_letters; i++) {
                cur[i % (cur.length - 1 || 1)] += ' ';
            }
            res.push(cur.join(''));
            cur = [];
            num_of_letters = 0;
        }
        cur.push(w);
        num_of_letters += w.length;
    }

    // Last line: Left justified
    let lastLine = cur.join(' ');
    while (lastLine.length < maxWidth) lastLine += ' ';
    res.push(lastLine);

    return res;
};

const result = fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16);
console.log(result);
