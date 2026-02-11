/**
 * Optimized Approach:
 * 1. Binary Search: Count soldiers in O(log C) instead of O(C).
 * 2. MinHeap: Efficiently find the k weakest rows in O(R + k log R).
 * Total Time Complexity: O(R * log C + R + k * log R)
 */

var kWeakestRows = function (mat, k) {
    const rows = mat.length;
    const cols = mat[0].length;
    
    // 1. Calculate soldier counts using Binary Search
    const strength = [];
    for (let i = 0; i < rows; i++) {
        const count = countSoldiers(mat[i], cols);
        strength.push({ count, index: i });
    }

    // 2. Build MinHeap from all rows
    const heap = new MinHeap(strength);
    
    // 3. Extract k weakest rows
    const result = [];
    for (let i = 0; i < k; i++) {
        result.push(heap.extractMin().index);
    }
    
    return result;
};

// Binary Search to count 1s
function countSoldiers(row, cols) {
    let left = 0, right = cols - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (row[mid] === 1) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
}

// Minimal MinHeap Implementation
class MinHeap {
    constructor(data = []) {
        this.heap = data;
        // Build heap (heapify) - O(N)
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.heapifyDown(i);
        }
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        const min = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.heapifyDown(0);
        }
        return min; // Returns { count, index }
    }

    heapifyDown(i) {
        const length = this.heap.length;
        let smallest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;

        // Custom Comparator Logic: 
        // 1. Compare counts
        // 2. If counts equal, compare indices
        if (left < length && this.compare(this.heap[left], this.heap[smallest]) < 0) {
            smallest = left;
        }
        if (right < length && this.compare(this.heap[right], this.heap[smallest]) < 0) {
            smallest = right;
        }

        if (smallest !== i) {
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            this.heapifyDown(smallest);
        }
    }

    // Returns negative if a < b (a is weaker/smaller)
    compare(a, b) {
        if (a.count !== b.count) {
            return a.count - b.count;
        }
        return a.index - b.index;
    }
}

// Test cases
const mat1 = [
    [1,1,0,0,0],
    [1,1,1,1,0],
    [1,0,0,0,0],
    [1,1,0,0,0],
    [1,1,1,1,1]
];
console.log(kWeakestRows(mat1, 3)); // Output: [2, 0, 3]

const mat2 = [
    [1,0,0,0],
    [1,1,1,1],
    [1,0,0,0],
    [1,0,0,0]
];
console.log(kWeakestRows(mat2, 2)); // Output: [0, 2]