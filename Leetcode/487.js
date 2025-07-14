/**
 * Given a binary array nums, return the maximum number of consecutive 1's in the array if you can flip at most one 0.
 */

var findMaxConsecutiveOnes = function(nums) {

    let count = 0;
    let prevIndex = -1;
    let maxLength = 1;
    for (let i = 0; i < nums.length; i++) {
       if (nums[i] === 0) {
           count = (i - prevIndex);
           prevIndex = i;

       } else if (nums[i] === 1) {
           count++;
       }

       maxLength = Math.max(maxLength, count);
    }


    return maxLength;
};

console.log(findMaxConsecutiveOnes([1,1,0,1]));
console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]));