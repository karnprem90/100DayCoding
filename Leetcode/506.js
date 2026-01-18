var findRelativeRanks = function (score) {
  let ranks = [];
  let map = new Map();
  for (let i = 0; i < score.length; i++) {
    map.set(score[i], i);
  }
  score.sort((a, b) => b - a);
  for (let i = 0; i < score.length; i++) {
    let index = map.get(score[i]);
    if (i === 0) {
        ranks[index] = 'Gold Medal';
    } else if (i === 1) {
        ranks[index] = 'Silver Medal';
    } else if ( i === 2) {
        ranks[index] = 'Bronze Medal';
    } else {
        ranks[index] = String(i + 1);
    }
  }
  return ranks;
};

console.log(findRelativeRanks([10, 3, 8, 9, 4]));
console.log(findRelativeRanks([5, 4, 3, 2, 1]));