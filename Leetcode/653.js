var findTarget = function(root, k) {
    let set = new Set();
    let queue = [root];
    while (queue.length > 0) {
        let node = queue.shift();
        if (set.has(k - node.val)) {
            return true;
        }
        set.add(node.val);
        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
    }
    return false;
};

function findTargetWithRecursive(root, k) {
    let set = new Set();
    return findTargetWithRecursiveHelper(root, k, set);
}

function findTargetWithRecursiveHelper(root, k, set) {
    if (!root) {
        return false;
    }
    if (set.has(k - root.val)) {
        return true;
    }
    set.add(root.val);
    return findTargetWithRecursiveHelper(root.left, k, set) || findTargetWithRecursiveHelper(root.right, k, set);
}