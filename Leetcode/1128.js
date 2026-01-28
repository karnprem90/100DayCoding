var numEquivDominoPairs = function(dominoes) {
    let count = new Array(100).fill(0);
    let result = 0;
    for (let domino of dominoes) {
        let key = Math.min(domino[0], domino[1]) * 10 + Math.max(domino[0], domino[1]);
        result += count[key];
        count[key]++;
    }
    return result;
};
console.log(numEquivDominoPairs([[1, 2], [2, 1], [3, 4], [5, 6]]));
console.log(numEquivDominoPairs([[1, 2], [1, 2], [1, 1], [1, 2], [2, 2]]));
