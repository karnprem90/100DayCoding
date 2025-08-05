
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maximumAverageSubtree = function(root) {
    let maxAvgSum = 0;
    // start from the root;
    // mark node visited everytime you visit the node;
    //
    function traverse(node) {
        if (!node) {
            return { sum: 0, count: 0 };
        }

        const left  = traverse(node.left);
        const right = traverse(node.right);
        let currentSum = left.sum + right.sum + node.val;
        let currentCount = left.count + right.count + 1;
        let currentAvg = currentSum/currentCount;
        maxAvgSum = Math.max(maxAvgSum, currentAvg);
        return { sum: currentSum, count: currentCount };

    }
    traverse(root);
    return maxAvgSum;

};

var root = new TreeNode(5);
root.left = new TreeNode(6);
root.right = new TreeNode(1);

console.log(maximumAverageSubtree(root));

