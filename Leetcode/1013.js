var canThreePartsEqualSum = function(arr) {
    const totalSum = arr.reduce((acc, num) => acc + num, 0);
    if (totalSum % 3 !== 0) {
        return false;
    }
    const target = totalSum / 3;
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        sum += arr[i];
        if (sum === target) {
            count++;
            sum = 0;
        }
        if (count === 2) {
            return true;
        }
    }
    return false;
};

console.log(canThreePartsEqualSum([0,2,1,-6,6,-7,9,1,2,0,1]))
console.log(canThreePartsEqualSum([0,2,1,-6,6,7,9,-1,2,0,1]))
console.log(canThreePartsEqualSum([3, 3, 6, 5, -2, 2, 5, 1, -9, 4]))
// Basic cases
console.log("Basic cases=====")
console.log(canThreePartsEqualSum([1, -1, 1, -1]));              // false (sum=0, can't split into 3 parts)
console.log(canThreePartsEqualSum([0, 0, 0, 0]));               // true  (0 | 0 | 0,0)
console.log(canThreePartsEqualSum([1, 1, 1, 1, 1, 1]));         // true  (1,1 | 1,1 | 1,1)
console.log(canThreePartsEqualSum([6, 1, 1, 13, -1, 0, -10, 20])); // false
// Edge cases with zeros
console.log("Edge cases with zeros=====")
console.log(canThreePartsEqualSum([0, 0, 0]));                  // true  (0 | 0 | 0)
console.log(canThreePartsEqualSum([0, 0, 0, 0, 0]));            // true
// Sum not divisible by 3
console.log("Sum not divisible by 3=====")
console.log(canThreePartsEqualSum([1, 2, 3]));                  // false (sum=6/3=2, but 1≠2)
console.log(canThreePartsEqualSum([1, 1, 1, 1]));               // false (sum=4, not divisible by 3)
// Negative numbers
console.log("Negative numbers=====")
console.log(canThreePartsEqualSum([-3, -3, -3]));               // true
console.log(canThreePartsEqualSum([10, -10, 10, -10, 10, -10, 10, -10, 10, -10])); // false
// Tricky cases
console.log("Tricky cases=====")
console.log(canThreePartsEqualSum([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1])); // true (sum=0)
console.log(canThreePartsEqualSum([12, -4, 16, -5, 9, -3, 3, 8, 0]));           // true
console.log(canThreePartsEqualSum([18, 12, -18, 18, -19, -1, 10, 10]));         // true
// Minimum length array
console.log("Minimum length array=====")
console.log(canThreePartsEqualSum([3, 3, 3]));                  // true
// Large values
console.log("Large values=====")
console.log(canThreePartsEqualSum([10000, 10000, 10000]));      // true
console.log(canThreePartsEqualSum([-10000, -10000, -10000, 30000, -10000, -10000, -10000, 30000, -10000, -10000, -10000, 30000])); // false
// Give More input with output