// Approach: Binary Search
// Find where the gap breaks the pattern
var missingNumber = function(arr) {
    const n = arr.length;
    const d = (arr[n - 1] - arr[0]) / n;
    
    // Edge case: all elements are same
    if (d === 0) return arr[0];
    
    let left = 0;
    let right = n - 1;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        // Check if element at mid is where it should be
        // Expected value at index i = arr[0] + i * d
        if (arr[mid] === arr[0] + mid * d) {
            // Missing is in the right half
            left = mid + 1;
        } else {
            // Missing is in the left half (or at mid)
            right = mid;
        }
    }
    
    // The missing number is before arr[left]
    return arr[0] + left * d;
};

// Test cases
console.log(missingNumber([5, 7, 11, 13]));      // Expected: 9
console.log(missingNumber([15, 13, 12]));        // Expected: 14
console.log(missingNumber([1, 3, 5, 9]));        // Expected: 7
console.log(missingNumber([5, 5, 5, 5]));        // Expected: 5