function inOrderTraversal(root) {
    let result = [];
    function dfs(root) {
        if (!root) {
            return null;
        }
        dfs(root.left);
        result.push(root.val);
        dfs(root.right);
    }
    dfs(root);
    return result;
}


class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

let node = new TreeNode(1);
node.left = new TreeNode(4);
node.left.left = new TreeNode(4);
node.left.right = new TreeNode(2);

console.log(inOrderTraversal(node));


function morrisInorderTraversal(root) {
    const result = [];
    let current = root;
    while (current) {
        if (!current.left) {
            result.push(current.val);
            current = current.right;
        } else {
            let pre = current.left;
            while (pre.right && pre.right !== current) {
                pre = pre.right;
            }

            if (!pre.right) {
                pre.right = current;
                current = current.left;
            } else {
                pre.right = null;
                result.push(current.val);
                current = current.right;
            }
        }
    }
    return result;
}

console.log(morrisInorderTraversal(node));