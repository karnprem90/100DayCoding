/**
 * Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
 * Output: [3,9,20,null,null,15,7]
 * Example 2:
 *
 * Input: preorder = [-1], inorder = [-1]
 * Output: [-1]
 *
 *
 * Constraints:
 *
 * 1 <= preorder.length <= 3000
 * inorder.length == preorder.length
 * -3000 <= preorder[i], inorder[i] <= 3000
 * preorder and inorder consist of unique values.
 * Each value of inorder also appears in preorder.
 * preorder is guaranteed to be the preorder traversal of the tree.
 * inorder is guaranteed to be the inorder traversal of the tree.
 */


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    // Optimization 1: Hash Map for O(1) lookups in inorder array
    const inorderIndexMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        inorderIndexMap.set(inorder[i], i);
    }
    
    // Global pointer for the preorder array. 
    // It tells us which element is the current root.
    let preorderIndex = 0;
    
    /**
     * Recursive helper function build the tree.
     * @param {number} left - The left boundary in the inorder array for the current subtree.
     * @param {number} right - The right boundary in the inorder array for the current subtree.
     * @returns {TreeNode}
     */
    function arrayToTree(left, right) {
        // Base case: If there are no elements to construct the subtree
        if (left > right) return null;
        
        // 1. Get the root value from preorder and increment our global pointer
        const rootValue = preorder[preorderIndex++];
        const root = new TreeNode(rootValue);
        
        // 2. Find where this root is in the inorder array
        const inorderMid = inorderIndexMap.get(rootValue);
        
        // 3. Recursively build the left and right subtrees.
        // Note: We MUST build the left subtree first because the global
        // preorderIndex represents elements in Root -> Left -> Right order.
        root.left = arrayToTree(left, inorderMid - 1);
        root.right = arrayToTree(inorderMid + 1, right);
        
        return root;
    }
    
    // Start the recursion covering the entire inorder array bounds
    return arrayToTree(0, inorder.length - 1);
};

console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]));