function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var closestValue = function(root, target) {
    let minValue = Infinity;
    let result;
    function dfs(root) {
        if (!root) {
            return null;
        }
        let val = root.val;
        let diff = Math.abs(target - val);
        if (minValue > diff) {  
            minValue = diff;
            result = val;
        } else if (minValue === diff) {
            result = Math.min(result, val);
        }
        dfs(root.left);
        dfs(root.right);
    }
    dfs(root);
    return result;
};

// Test Case 1: Example from LeetCode
//       4
//      / \
//     2   5
//    / \
//   1   3
// Target: 3.714286 → Expected: 4
var root1 = new TreeNode(4);
root1.left = new TreeNode(2);
root1.right = new TreeNode(5);
root1.left.left = new TreeNode(1);
root1.left.right = new TreeNode(3);
console.log("Test 1:", closestValue(root1, 3.5)); // Expected: 4

// // Test Case 2: Single node
// // Target: 4.5 → Expected: 1
// var root2 = new TreeNode(1);
// console.log("Test 2:", closestValue(root2, 4.5)); // Expected: 1

// // Test Case 3: Target equals a node value
// //       4
// //      / \
// //     2   5
// // Target: 2 → Expected: 2
// var root3 = new TreeNode(4);
// root3.left = new TreeNode(2);
// root3.right = new TreeNode(5);
// console.log("Test 3:", closestValue(root3, 2)); // Expected: 2

// // Test Case 4: Target is less than all values
// //       10
// //      /  \
// //     5    15
// // Target: 1 → Expected: 5
// var root4 = new TreeNode(10);
// root4.left = new TreeNode(5);
// root4.right = new TreeNode(15);
// console.log("Test 4:", closestValue(root4, 1)); // Expected: 5

// // Test Case 5: Target is greater than all values
// //       10
// //      /  \
// //     5    15
// // Target: 20 → Expected: 15
// var root5 = new TreeNode(10);
// root5.left = new TreeNode(5);
// root5.right = new TreeNode(15);
// console.log("Test 5:", closestValue(root5, 20)); // Expected: 15

// // Test Case 6: Target exactly between two nodes (should return smaller value if tied)
// //       2
// //      / \
// //     1   3
// // Target: 2.5 → Expected: 2 or 3 (both are same distance)
// var root6 = new TreeNode(2);
// root6.left = new TreeNode(1);
// root6.right = new TreeNode(3);
// console.log("Test 6:", closestValue(root6, 2.5)); // Expected: 2 or 3

// // Test Case 7: Larger tree
// //           8
// //         /   \
// //        4     12
// //       / \   /  \
// //      2   6 10   14
// // Target: 7 → Expected: 6 or 8 (6 is closer)
// var root7 = new TreeNode(8);
// root7.left = new TreeNode(4);
// root7.right = new TreeNode(12);
// root7.left.left = new TreeNode(2);
// root7.left.right = new TreeNode(6);
// root7.right.left = new TreeNode(10);
// root7.right.right = new TreeNode(14);
// console.log("Test 7:", closestValue(root7, 7)); // Expected: 6

// // Test Case 8: Target: 11
// console.log("Test 8:", closestValue(root7, 11)); // Expected: 10 or 12