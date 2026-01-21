var anagramMappings = function(nums1, nums2) {
    let map = new Map();
    for (let i = 0; i < nums2.length; i++) {
        map.set(nums2[i], i);
    }
    let result = [];
    for (let i = 0; i < nums1.length; i++) {
        result.push(map.get(nums1[i]));
    }
    return result;
};