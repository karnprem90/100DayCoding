var largestUniqueNumber = function(nums) {
    let counting = new Array(1001).fill(0);  
    for (let num of nums) {
        counting[num]++;
    }
    for (let i = 1000; i >= 0; i--) {
        if (counting[i] === 1) {
            return i;
        }
    }
    return -1;
};