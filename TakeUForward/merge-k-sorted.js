class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(i) { return Math.floor((i - 1) / 2); }
    getLeftChildIndex(i) { return 2 * i + 1; }
    getRightChildIndex(i) { return 2 * i + 2; }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    insert(node) {
        this.heap.push(node);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (
            index > 0 &&
            this.heap[this.getParentIndex(index)].value > this.heap[index].value
            ) {
            this.swap(index, this.getParentIndex(index));
            index = this.getParentIndex(index);
        }
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
    }

    heapifyDown() {
        let index = 0;
        const length = this.heap.length;

        while (this.getLeftChildIndex(index) < length) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);

            if (
                rightChildIndex < length &&
                this.heap[rightChildIndex].value < this.heap[smallerChildIndex].value
            ) {
                smallerChildIndex = rightChildIndex;
            }

            if (this.heap[index].value <= this.heap[smallerChildIndex].value) break;

            this.swap(index, smallerChildIndex);
            index = smallerChildIndex;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    peek() {
        return this.heap.shift();
    }
}

function mergeKSortedArrays(arrays) {
    const minHeap = new MinHeap();
    const result = [];

    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i].length > 0) {
            minHeap.insert({ value: arrays[i][0], arrayIndex: i, elementIndex: 0 });
        }
    }

    while (!minHeap.isEmpty()) {
        const { value, arrayIndex, elementIndex } = minHeap.extractMin();
        result.push(value);

        const nextIndex = elementIndex + 1;
        if (nextIndex < arrays[arrayIndex].length) {
            minHeap.insert({
                value: arrays[arrayIndex][nextIndex],
                arrayIndex,
                elementIndex: nextIndex,
            });
        }
    }

    return result;
}

const arrays = [
    [1,2,3,4,5,6,1,2]
];


function sortArrays(arr) {
    let heap = new MinHeap();
    let sortedArr= [];
    for (let num of arr) {
        heap.insert(num);
    }

    while (!heap.isEmpty()) {
        sortedArr.push(heap.extractMin());
    }

    return sortedArr;
}


function topKFrequentElements(arr, k) {
    const map = new Map();
    for (let num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    const heap = new MinHeap();

    for (let [num, freq] of map.entries()) {
        if (heap.size() < k) {
            heap.insert([num, freq]);
        } else if (freq > heap.peek()[1]) {
            heap.extractMin();
            heap.insert([num, freq]);
        }
    }
}

console.log(sortArrays([1,2,4,1,3,2]));