class FenwickTree {
    constructor(n) {
        this.size = n;
        this.tree = new Array(n + 1).fill(0);
    }

    lowbit(x) {
        return x & -x;
    }

    update(index, val) {
        while (index <= this.size) {
            this.tree[index] += val;
            index += this.lowbit(index);
        }
    }

    query(index) {
        let sum = 0;
        while (index > 0) {
            sum += this.tree[index];
            index -= this.lowbit(index);
        }
        return sum;
    }

    rangeQuery(left, right) {
        return this.query(right) - this.query(left - 1);
    }
}

const fenwickTree = new FenwickTree(10);
fenwickTree.update(1, 1);
fenwickTree.update(2, 2);
fenwickTree.update(3, 3);
fenwickTree.update(4, 4);
fenwickTree.update(5, 5);
fenwickTree.update(6, 6);
fenwickTree.update(7, 7);
fenwickTree.update(8, 8);
fenwickTree.update(9, 9);
fenwickTree.update(10, 10);
console.log(fenwickTree.query(10));
console.log(fenwickTree.rangeQuery(1, 10));
