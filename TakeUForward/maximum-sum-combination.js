class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let current = this.heap.length - 1;
        while (current > 0) {
            const parent = Math.floor((current - 1) / 2);
            if (this.heap[parent] >= this.heap[current]) break;
            [this.heap[parent], this.heap[current]] = [this.heap[current], this.heap[parent]];
            current = parent;
        }
    }

    heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        let largest = index;
        while(true) {
            let leftChild = 2 * index + 1;
            let rightChild = 2 * index + 2;
            while (leftChild < length && this.heap[leftChild].sum > this.heap[largest].sum ) {
                largest = leftChild;
            }
            while (rightChild < length && this.heap[rightChild].sum > this.heap[largest].sum) {
                largest = rightChild;
            }

            if (largest === index) {
                break;
            }

            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            index = largest;
        }
    }

    size() {
        return this.heap.length;
    }

    getMax() {
        if (this.heap.length === 0) {
            return null;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return max;
    }

}

function maximumSumCombinations(arr1, arr2, k) {
    arr1.sort((a, b) => b - a);
    arr2.sort((a, b) => b - a);

    const n = arr1.length;
    const heap = new MaxHeap();
    const visited = new Set();

    const result = [];
    heap.insert({
        sum: arr1[0] + arr2[0],
        i:0,
        j: 0
    });
    visited.add(`${0},${0}`);
    while (result.  length < k && heap.size() > 0) {
        const { sum, i, j} = heap.getMax();
        result.push([arr1[i], arr2[j]]);

        if (i + 1 < n && !visited.has(`${i + 1},${j}`)) {
            heap.insert({ sum: arr1[i + 1] + arr2[j], i: i + 1, j });
            visited.add(`${i + 1},${j}`);
        }

        if (j + 1 < n && !visited.has(`${i},${j + 1}`)) {
            heap.insert({ sum: arr1[i] + arr2[j + 1], i, j: j + 1 });
            visited.add(`${i},${j + 1}`);
        }
    }
    return result;
}

const arr1 = [4, 2, 5, 1];
const arr2 = [8, 0, 3, 5];
const k = 3;

console.log(maximumSumCombinations(arr1, arr2, k));