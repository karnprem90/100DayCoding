function bottomViewBinaryTree(root) {
    let map = new Map();
    let queue = [{ node: root, hd: 0}];
    const result = [];
    while (queue.length) {
        const { node, hd } = queue.shift();
        map.set(hd, node.data);
        if (node.left) {
            queue.push({node: node.left, hd: hd - 1});
        }
        if (node.right) {
            queue.push({node: node.right, hd: hd + 1});
        }
    }

    [...map.keys()].sort((a, b) => a - b).forEach(hd => {
        result.push(map.get(hd));
    })
    return result;
}

class TreeNode {
    constructor(data, left = null, right = null) {
        this.left = left;
        this.right = right;
        this.data = data;
    }
}

const root = new TreeNode(20);
root.left = new TreeNode(8);
root.right = new TreeNode(22);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(3);
root.left.right.left = new TreeNode(10);
root.left.right.right = new TreeNode(14);
root.right.right = new TreeNode(25);

console.log(bottomViewBinaryTree(root));