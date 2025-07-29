
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} rootgvcx
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if (!root) {
        return new TreeNode(val);
    }
    function traverse(node) {
        if (!node) {
            return;
        }
        if (val <= node.val) {
            if (!node.left) {
                node.left = new TreeNode(val);
                return;
            }
            traverse(node.left);
        } else {
            if (!node.right) {
                node.right = new TreeNode(val);
                return;
            }
            traverse(node.right);
        }
    }

    traverse(root);
   return root;
};

// let root = new TreeNode(4);
// root.left = new TreeNode(2);
// root.right = new TreeNode(7);
// root.left.left = new TreeNode(1);
// root.left.right = new TreeNode(3);
// console.log(insertIntoBST(root, 5));

let root1 = new TreeNode(40);
root1.left = new TreeNode(20);
root1.right = new TreeNode(60);
root1.left.left = new TreeNode(10);
root1.left.right = new TreeNode(30);
root1.right.left = new TreeNode(50);
root1.right.right = new TreeNode(70);

console.log(insertIntoBST(root1, 25));
