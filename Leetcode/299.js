/**
 * You are playing the Bulls and Cows game with your friend.
 *
 * You write down a secret number and ask your friend to guess what the number is. When your friend makes a guess, you provide a hint with the following info:
 *
 * The number of "bulls", which are digits in the guess that are in the correct position.
 * The number of "cows", which are digits in the guess that are in your secret number but are located in the wrong position. Specifically, the non-bull digits in the guess that could be rearranged such that they become bulls.
 * Given the secret number secret and your friend's guess guess, return the hint for your friend's guess.
 *
 * The hint should be formatted as "xAyB", where x is the number of bulls and y is the number of cows. Note that both secret and guess may contain duplicate digits.
 */

var getHint = function(secret, guess) {
    let map2 = new Map();
    let countA = 0;
    let countB = 0;
    let visited = {};
    for (let i = 0; i < secret.length; i++) {
        if (guess[i] === secret[i]) {
            countA++;
            visited[i] = true;
        } else {
            map2.set(secret[i], (map2.get(secret[i]) || 0) + 1);
        }
    }
    for (let char in guess) {
        if (map2.get(guess[char]) && !visited[char]) {
            countB++;
            let val = map2.get(guess[char]);
            val--;
            map2.set(guess[char], val);
        }
    }

    return `${countA}A${countB}B`


};

console.log(getHint('1123', '0111'));