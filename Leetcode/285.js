
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {

    let result = null;
    let found = false;

    var dfs = function(node){
        if (node === null) return;

        dfs(node.left);

        if(found){
            result = node;
            found = false;
            return;
        }

        if(node.val===p.val)
            found = true;

        dfs(node.right);
    }

    dfs(root);

    return result;
};

var root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.left.left.left = new TreeNode(1);
var p = new TreeNode(6);
console.log(inorderSuccessor(root, p));