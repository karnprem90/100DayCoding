/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 *
 * The overall run time complexity should be O(log (m+n)).
 *
 *
 *
 * Example 1:
 *
 * Input: nums1 = [1,3], nums2 = [2]
 * Output: 2.00000
 * Explanation: merged array = [1,2,3] and median is 2.
 * Example 2:
 *
 * Input: nums1 = [1,2], nums2 = [3,4]
 * Output: 2.50000
 * Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 *
 *
 * Constraints:
 *
 * nums1.length == m
 * nums2.length == n
 * 0 <= m <= 1000
 * 0 <= n <= 1000
 * 1 <= m + n <= 2000
 * -106 <= nums1[i], nums2[i] <= 106
 */

var findMedianSortedArrays = function (nums1, nums2) {
    let nums1Length = nums1.length;
    let nums2Length = nums2.length;
    if ((nums1Length + nums2Length) % 2 !== 0) {
        return ((nums1Length + nums2Length + 1) / 2 );
    }



};

function findMedian(nums1, nums2) {
    let nums1Length = nums1.length;
    let nums2Length = nums2.length;
    if ((nums1Length + nums2Length) % 2 === 0) {
        return (nums1[nums1Length - 1] + nums2[0]) / 2;
    } else {
        return nums1[nums1Length - 1];
    }
}
const nums1 = [1,3,6,7];
// 1,2,3
const nums2 = [2,4,5,6,7,8];
console.log(findMedianSortedArrays(nums1, nums2));

//[1,3,6,7] - 4.5
//[2,4,5,6,7,8] - 5.5
// 7 > 2
//
// [1,2,3,4] = 2.5
// [5,6,7,8] = 6.5

// [1,2,3,4,5,6,7,8] = 4.5