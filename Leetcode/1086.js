var highFive = function(items) {
    const map = new Map();
    
    for (const [id, score] of items) {
        if (!map.has(id)) map.set(id, []);
        const scores = map.get(id);
        
        let left = 0, right = scores.length;
        while (left < right) {
            const mid = (left + right) >> 1;
            if (scores[mid] > score) left = mid + 1;
            else right = mid;
        }
        scores.splice(left, 0, score);
        
        if (scores.length > 5) scores.pop();
    }
    
    return [...map.entries()]
        .map(([id, scores]) => [id, Math.floor(scores.reduce((a, b) => a + b) / 5)])
        .sort((a, b) => a[0] - b[0]);
};
console.log(highFive([[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]))