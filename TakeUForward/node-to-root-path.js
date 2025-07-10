function nodeToRootPath(node, val) {

    let result = [];
    let maxLength = 0;
    function dfs(node, arr) {
        if (!node) {
            maxLength = Math.max(maxLength, arr.length);
            if (arr.length >= maxLength) {
                result.pop();
                result.push([...arr]);
            }
            return;
        }
        arr.push(node.data)
        dfs(node.left, arr);
        dfs(node.right, arr);
        arr.pop();
    }
    dfs(root, []);
    console.log(result);
}

class TreeNode {
    constructor(data, left = null, right = null) {
        this.left = left;
        this.right = right;
        this.data = data;
    }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left  = new TreeNode(4);
root.right.right = new TreeNode(5);
root.right.right.left = new TreeNode(6);
// root.left.right.right = new TreeNode(7);

console.log(nodeToRootPath(root));