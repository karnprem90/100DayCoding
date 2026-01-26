var minimumDistance = function(nums) {
    let map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], []);
        }
        map.get(nums[i]).push(i);  
    }
    
    let min = Infinity;
    
    for (let [key, indices] of map.entries()) {
        if (indices.length >= 3) {
            for (let i = 0; i < indices.length - 2; i++) {
                let val = Math.abs(indices[i] - indices[i + 1]) + Math.abs(indices[i + 1] - indices[i + 2]) + Math.abs(indices[i + 2] - indices[i]);
                min = Math.min(min, val);
            } 
        }
    }
    
    return min === Infinity ? -1 : min;
};

console.log(minimumDistance([5,3,5,5,5]));