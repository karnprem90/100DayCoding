var WordDictionary = function (children) {
  this.children = {};
  this.isEndOfWord = false;
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let current = this;

  for (let char of word) {
    if (!current.children[char]) {
      current.children[char] = new WordDictionary();
    }
    current = current.children[char];
  }

  current.isEndOfWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word, i = 0) {
  if (i === word.length) {
    return this.isEndOfWord;
  }

  let char = word[i];
  if (char === ".") {
    for (let key in this.children) {
      if (this.children[key].search(word, i + 1)) return true;
    }
    return false;
  }

  if (!this.children[char]) {
    return false;
  }

  return this.children[char].search(word, i + 1);
};

var obj = new WordDictionary();
obj.addWord("a");
obj.addWord("a");
console.log(obj.search("."));
console.log(obj.search("aa"));
console.log(obj.search("a"));
console.log(obj.search(".a"));
console.log(obj.search("a."));
