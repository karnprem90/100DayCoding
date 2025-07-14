/**
 * Given an integer array nums, design an algorithm to randomly shuffle the array. All permutations of the array should be equally likely as a result of the shuffling.
 *
 * Implement the Solution class:
 *
 * Solution(int[] nums) Initializes the object with the integer array nums.
 * int[] reset() Resets the array to its original configuration and returns it.
 * int[] shuffle() Returns a random shuffling of the array.
 */

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums;
    this.originalNums = JSON.parse(JSON.stringify(nums));
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    console.log("Before===", this.originalNums);
    this.nums = JSON.parse(JSON.stringify(this.originalNums));
    console.log("After===", this.originalNums);
    return this.originalNums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let currentIndex = this.nums.length;
    while (currentIndex !== 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [this.nums[currentIndex] , this.nums[randomIndex]] = [this.nums[randomIndex], this.nums[currentIndex]];
    }
    return this.nums;
};

/**
 * Your Solution object will be instantiated and called as such:
 * */

let nums = [1, 2, 3];
 var obj = new Solution(nums)
 var param_1 = obj.reset()
 var param_2 = obj.shuffle();

 console.log(param_1);
 console.log(param_2);