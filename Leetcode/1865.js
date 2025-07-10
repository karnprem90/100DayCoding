var FindSumPairs = function(nums1, nums2) {
    this.nums1 = nums1;
    this.nums2 = nums2;
    this.count = 0;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function(index, val) {
    this.nums2[index] += val;
};

/**
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function(tot) {
    let map = new Map();
    for (let num2 of this.nums2) {
        map.set(num2, (map.get(num2) || 0) + 1)
    }
    let res = 0;
    for (let num1 of this.nums1) {
        res += map.get(tot - num1) || 0;
    }
    return res;
};

 const nums1 = [1, 1, 2, 2, 2, 3];
 const nums2 = [1, 4, 5, 2, 5, 4]
 var obj = new FindSumPairs(nums1, nums2)
 // obj.add(index,val)
 var param_2 = obj.count(7)
