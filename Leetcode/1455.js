var isPrefixOfWord = function(sentence, searchWord) {
        let sentenceArray = sentence.split(" ");
        for (let i = 0; i < sentenceArray.length; i++) {
            if (sentenceArray[i].startsWith(searchWord)) {
                return i + 1;
            }
        }
        return -1;
};

console.log(isPrefixOfWord("i love eating burger", "burg"));