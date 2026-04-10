/**
 * Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

 

Example 1:

Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]
Example 2:

Input: s = "a"
Output: [["a"]]
 

Constraints:

1 <= s.length <= 16
s contains only lowercase English letters.
 */

/**
 * @param {string} s
 * @return {string[][]} 
 */
var partition = function (s) {
    const result = [];
    const currentPartition = [];

    // Helper function to check if a substring is a palindrome
    const isPalindrome = (str) => {
        let left = 0;
        let right = str.length - 1;
        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    };

    // Backtracking function
    const backtrack = (startIndex) => {
        // Base case: If we've reached the end of the string, we have a valid partition
        if (startIndex === s.length) {
            result.push([...currentPartition]); // Add a copy of the current partition
            return;
        }

        // Explore all possible partitions starting from the current index
        for (let i = startIndex; i < s.length; i++) {
            const substring = s.substring(startIndex, i + 1);

            // If the substring is a palindrome, add it to the current partition and recurse
            if (isPalindrome(substring)) {
                currentPartition.push(substring);
                backtrack(i + 1);
                currentPartition.pop(); // Backtrack: remove the last added substring
            }
        }
    };

    backtrack(0);
    return result;
};

// Example usage:
console.log(partition("aab")); // Output: [["a","a","b"],["aa","b"]]
console.log(partition("a")); // Output: [["a"]]
