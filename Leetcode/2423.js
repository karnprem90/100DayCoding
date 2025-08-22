/**
 * You are given a 0-indexed string word, consisting of lowercase English letters. You need to select one index and remove the letter at that index from word so that the frequency of every letter present in word is equal.
 *
 * Return true if it is possible to remove one letter so that the frequency of all letters in word are equal, and false otherwise.
 *
 * Note:
 *
 * The frequency of a letter x is the number of times it occurs in the string.
 * You must remove exactly one letter and cannot choose to do nothing.
 *
 *
 * Example 1:
 *
 * Input: word = "abcc"
 * Output: true
 * Explanation: Select index 3 and delete it: word becomes "abc" and each character has a frequency of 1.
 * Example 2:
 *
 * Input: word = "aazz"
 * Output: false
 * Explanation: We must delete a character, so either the frequency of "a" is 1 and the frequency of "z" is 2, or vice versa. It is impossible to make all present letters have equal frequency.
 */

/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function(word) {
    let map = {};
    let max = -Infinity;
    let min = Infinity;
    for (let char in word) {
        if (map[word[char]]) {
            map[word[char]] += 1;
        } else {
            map[word[char]] = 1;
        }

        max = Math.max(max, map[word[char]]);
    }
    let findNextVal = max - 1;
    let count = 0;
    for (let key in map) {
        if (map[key] === findNextVal) {
            continue;
        }
        if (map[key] >= max && max - map[key] > 1) {
            count++;
        }
        if (count > 1) {
            return false;
        }
    }
    return true;
};

console.log(equalFrequency("aazz"));