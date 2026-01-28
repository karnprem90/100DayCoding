var findOcurrences = function(text, first, second) {
    let words = [];
    text = text.split(" ");
    for(let i = 0; i < text.length - 2; i++) {
        if (text[i] === first && text[i + 1] === second) {
            words.push(text[i + 2]);
        }
    }
    return words;
};
console.log(findOcurrences('alice is a good girl alice is a good student', 'a', 'good'))
console.log(findOcurrences('we will we will rock you', 'we', 'will'))