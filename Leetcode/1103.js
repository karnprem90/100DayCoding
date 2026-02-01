var distributeCandies = function(candies, num_people) {
    let ans = new Array(num_people).fill(0);
    let i = 0;
    let give = 1;
    
    while (candies > 0) {
        let actual = Math.min(give, candies);
        ans[i] += actual;
        candies -= actual;
        give++;                       
        i = (i + 1) % num_people; 
    }
    return ans;
};

console.log(distributeCandies(7, 4));
console.log(distributeCandies(10, 3))
