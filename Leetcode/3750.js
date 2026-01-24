var minimumFlips = function (n) {
    // Convert to binary string
    let binary = n.toString(2);
    
    let count = 0;
    let left = 0;
    let right = binary.length - 1;
    
    while (left < right) {
        if (binary[left] !== binary[right]) {
            count += 2;  // Both positions differ when comparing with reverse
        }
        left++;
        right--;
    }
    
    return count;
};
console.log(minimumFlips(4));   // Expected: 2
console.log(minimumFlips(6));
console.log(minimumFlips(9));
console.log(minimumFlips(11));
console.log(minimumFlips(7));   // Expected: 0
console.log(minimumFlips(10));  // Expected: 4
