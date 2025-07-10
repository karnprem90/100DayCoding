var subArray = function(nums, k) {
    let map = {
        0: 1
    }
    let total = 0;
    let count = 0;

    for (const num of nums) {
        total += num;
        if (map[total - k] !== undefined) {
            count += map[total - k];
        }
        map[total] = (map[total] || 0) + 1;
    }
    return count;
}


console.log(subArray([1,1,1,2,1,1,1,1,1,1], 3));