function twoSum(nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let val = target - nums[i];
        if (map.has(val)) {
            return [map.get(val), i];
        }

        map.set(nums[i], i);

    }
    return [];
}


console.log(twoSum( [1, 6, 2, 10, 3]), 7);
// time complexity =  O(n)
// space complexity = O(n) - Improve by applying sorting

