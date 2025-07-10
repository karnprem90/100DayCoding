function prePostInOrderInOneTraversal(root) {
    let preorder = [];
    let postorder = [];
    let inorder = [];

    function dfs(root) {
        if (!root) {
            return null;
        }
        preorder.push(root.data);
        dfs(root.left);
        inorder.push(root.data);
        dfs(root.right);
        postorder.push(root.data);
    }
    dfs(root);
    return [preorder, postorder, inorder];
}

class TreeNode {
    constructor(data, left = null, right = null) {
        this.left = left;
        this.right = right;
        this.data = data;
    }
}

const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.left.left = new TreeNode(3);
root.left.left.right = new TreeNode(9);
root.left.left.right.left = new TreeNode(1);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(6);
root.right.right.left = new TreeNode(8);

console.log(prePostInOrderInOneTraversal(root));