var dietPlanPerformance = function(calories, k, lower, upper) {
    let score = 0;
    let sum = 0;
    for (let i = 0; i < calories.length; i++) {
        sum += calories[i];
        if (i >= k) {
            sum -= calories[i - k];
        }
        if (i >= k - 1) {
            if (sum < lower) {
                score--;
            } else if (sum > upper) {
                score++;
            }
        }
    }
    return score;
};

console.log(dietPlanPerformance([1,2,3,4,5], 1, 3, 3));
console.log(dietPlanPerformance([3,0,0,0], 2, 1, 2));