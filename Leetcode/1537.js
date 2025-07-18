/**
 * You are given two sorted arrays of distinct integers nums1 and nums2.
 *
 * A valid path is defined as follows:
 *
 * Choose array nums1 or nums2 to traverse (from index-0).
 * Traverse the current array from left to right.
 * If you are reading any value that is present in nums1 and nums2 you are allowed to change your path to the other array. (Only one repeated value is considered in the valid path).
 * The score is defined as the sum of unique values in a valid path.
 *
 * Return the maximum score you can obtain of all possible valid paths. Since the answer may be too large, return it modulo 109 + 7.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums1 = [2,4,5,8,10], nums2 = [4,6,8,9]
 * Output: 30
 * Explanation: Valid paths:
 * [2,4,5,8,10], [2,4,5,8,9], [2,4,6,8,9], [2,4,6,8,10],  (starting from nums1)
 * [4,6,8,9], [4,5,8,10], [4,5,8,9], [4,6,8,10]    (starting from nums2)
 * The maximum is obtained with the path in green [2,4,6,8,10].
 * Example 2:
 *
 * Input: nums1 = [1,3,5,7,9], nums2 = [3,5,100]
 * Output: 109
 * Explanation: Maximum sum is obtained with the path [1,3,5,100].
 * Example 3:
 *
 * Input: nums1 = [1,2,3,4,5], nums2 = [6,7,8,9,10]
 * Output: 40
 * Explanation: There are no common elements between nums1 and nums2.
 * Maximum sum is obtained with the path [6,7,8,9,10].
 */


var maxSum = function(nums1, nums2) {
    let j = 0;
    let k = 0;
    let sum = 0;
    if ( nums1.length > nums2.length ) {
        while (nums1[j] < nums2[k]) {
            sum += nums1[j];
            j++;
        }
        let m = 0;
        for (let i = j; i < nums1.length; i++) {
            if (nums2[m] && nums1[i] >= nums2[m]) {
                sum += nums1[i];
                m++;
            } else if (nums2[m] && nums1[i] < nums2[m]){
                sum += nums2[m];
                m++;
            }
        }
        return sum;
    }
    if (nums1.length < nums2.length ) {
        j = 0;
        k = 0;
        sum = 0;
        while (nums2[j] < nums1[k]) {
            sum += nums2[j]
            j++;
        }
        let m = 0;
        for (let i = j; i < nums2.length; i++) {
            if (nums2[m] && nums2[i] >= nums1[m]) {
                sum += nums2[i];
                m++;
            } else if (nums2[m] && nums2[i] < nums1[m]){
                sum += nums1[m];
                m++;
            }
        }
        return sum;
    }

    if (nums1.length === nums2.length ) {
        let m = 0;
        let sum = 0;
        for (let i = 0; i < nums1.length; i++) {
            if (nums2[m] && nums1[i] >= nums2[m]) {
                sum += nums1[i];
                m++;
            } else if (nums2[m] && nums1[i] < nums2[m]){
                sum += nums2[m];
                m++;
            }
        }
        return sum;
    }
};

console.log(maxSum([3, 6, 7, 8, 10, 12, 15, 18, 100], [1, 2, 3, 5, 7, 9, 10, 11, 15, 16, 18, 25, 50]));