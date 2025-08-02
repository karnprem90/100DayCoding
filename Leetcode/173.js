/**
 * Implement the BSTIterator class that represents an iterator over the in-order traversal of a binary search tree (BST):
 *
 * BSTIterator(TreeNode root) Initializes an object of the BSTIterator class. The root of the BST is given as part of the constructor. The pointer should be initialized to a non-existent number smaller than any element in the BST.
 * boolean hasNext() Returns true if there exists a number in the traversal to the right of the pointer, otherwise returns false.
 * int next() Moves the pointer to the right, then returns the number at the pointer.
 * Notice that by initializing the pointer to a non-existent smallest number, the first call to next() will return the smallest element in the BST.
 *
 * You may assume that next() calls will always be valid. That is, there will be at least a next number in the in-order traversal when next() is called.
 *
 *
 *
 * Example 1:
 *
 *
 * Input
 * ["BSTIterator", "next", "next", "hasNext", "next", "hasNext", "next", "hasNext", "next", "hasNext"]
 * [[[7, 3, 15, null, null, 9, 20]], [], [], [], [], [], [], [], [], []]
 * Output
 * [null, 3, 7, true, 9, true, 15, true, 20, false]
 *
 * Explanation
 * BSTIterator bSTIterator = new BSTIterator([7, 3, 15, null, null, 9, 20]);
 * bSTIterator.next();    // return 3
 * bSTIterator.next();    // return 7
 * bSTIterator.hasNext(); // return True
 * bSTIterator.next();    // return 9
 * bSTIterator.hasNext(); // return True
 * bSTIterator.next();    // return 15
 * bSTIterator.hasNext(); // return True
 * bSTIterator.next();    // return 20
 * bSTIterator.hasNext(); // return False
 *
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 105].
 * 0 <= Node.val <= 106
 * At most 105 calls will be made to hasNext, and next.
 */


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    this.root = root;
    const result = [];
    function helper(root) {
        if(!root) {
            return null;
        }
        helper(root.left);
        result.push(root.val);
        helper(root.right);
    }
    helper(root);
    this.result = result;
    this.pointer = 0;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    let val = this.result[this.pointer];
    this.pointer++;
    return val;

};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.pointer < this.result.length;
};


 var root = new TreeNode(7);
 root.left = new TreeNode(3);
 root.right = new TreeNode(15);
 root.right.left = new TreeNode(9);
 root.right.right = new TreeNode(20);
 var obj = new BSTIterator(root)
 var param_1 = obj.next();
 console.log(param_1);
 var param_2 = obj.next();
 console.log(param_2);
 var param_3 = obj.hasNext()
 console.log(param_3);
 var param_4 = obj.next();
 console.log(param_4);
 var param_5 = obj.hasNext();
 console.log(param_5);
 var param_6 = obj.next();
 console.log(param_6);
 var param_7 = obj.hasNext();
 console.log(param_7);
 var param_8 = obj.next();
 console.log(param_8);
 var param_9 = obj.hasNext();
 console.log(param_9);
