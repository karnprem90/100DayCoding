/**
 * The Longest Bitonic Subarray (LBS) problem is to find a subarray of a given sequence in which the subarray’s elements are first sorted in increasing order, then in decreasing order, and the subarray is as long as possible. Strictly ascending or descending subarrays are also accepted.
 *
 * For example,
 *
 * Longest bitonic subarray of the sequence { 3, 5, 8, 4, 5, 9, 10, 8, 5, 3, 4 } is { 4, 5, 9, 10, 8, 5, 3 } For sequences sorted in increasing or decreasing order, the output is the same as the input sequence, i.e., [1, 2, 3, 4, 5] ——> [1, 2, 3, 4, 5][5, 4, 3, 2, 1] ——> [5, 4, 3, 2, 1]
 */

function longestBitonicSubarray(arr) {
    if (arr.length === 1) {
        return arr;
    }
    let n = arr.length;
    let maxLength = 1;
    for (let i = 0; i < arr.length; i++) {
        let incLen = 1;
        let j = i - 1;
        while ( j >= 0 && arr[j] < arr[j + 1] ) {
            incLen++;
            j--;
        }

        let decLen = 1;
        j = i + 1;
        while (j < n && arr[j - 1] > arr[j]) {
            decLen++;
            j++;
        }

        const btcLen = incLen + decLen - 1;
        maxLength = Math.max(maxLength, btcLen);
    }
    return maxLength;
}

console.log(longestBitonicSubarray([3, 5, 8, 4, 5, 9, 10, 8, 5, 3, 4]));