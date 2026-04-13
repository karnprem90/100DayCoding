# Bucket Sort Mastery

> **Goal**: Understand Bucket Sort deeply — not just the code, but *when* and *why* it works, so you can recognize it in interviews instantly.

---

## Table of Contents

1. [Why Do We Need Bucket Sort?](#1-why-do-we-need-bucket-sort)
2. [The Core Idea](#2-the-core-idea)
3. [Step-by-Step Walkthrough](#3-step-by-step-walkthrough)
4. [Generic Bucket Sort — Code Template](#4-generic-bucket-sort--code-template)
5. [Complexity Analysis](#5-complexity-analysis)
6. [The Family of Linear-Time Sorts](#6-the-family-of-linear-time-sorts)
   - [Counting Sort](#61-counting-sort)
   - [Bucket Sort](#62-bucket-sort)
   - [Radix Sort](#63-radix-sort)
7. [Bucket Sort Variations & Patterns](#7-bucket-sort-variations--patterns)
   - [Pattern 1: Full Sort](#pattern-1-full-sort)
   - [Pattern 2: Pigeonhole Principle (Gap Problems)](#pattern-2-pigeonhole-principle-gap-problems)
   - [Pattern 3: Frequency Bucketing](#pattern-3-frequency-bucketing)
   - [Pattern 4: Value-Range Bucketing](#pattern-4-value-range-bucketing)
8. [When to Use / When NOT to Use](#8-when-to-use--when-not-to-use)
9. [Practice Problems (Ordered by Difficulty)](#9-practice-problems-ordered-by-difficulty)
10. [LeetCode 164 — Maximum Gap (Solved)](#10-leetcode-164--maximum-gap-solved)

---

## 1. Why Do We Need Bucket Sort?

### The n log n Barrier

Every **comparison-based** sort (QuickSort, MergeSort, HeapSort) has a proven lower bound of **Ω(n log n)**. This is a mathematical fact — you cannot beat it if your only operation is comparing two elements.

But what if we DON'T compare elements? What if we use the **value itself** to decide where it goes?

That's exactly what Bucket Sort does. It's a **distribution-based** sort that exploits knowledge about the data (like its range) to achieve **O(n)** time.

### Real-World Analogy

Imagine you're a postal worker sorting 1000 letters by ZIP code:

- **Comparison sort**: Pick two letters, compare ZIP codes, swap, repeat. Slow.
- **Bucket sort**: Put 10 bins labeled "00000-09999", "10000-19999", ..., "90000-99999". Toss each letter into the right bin. Sort each small bin. Done in one pass.

You're not comparing letters to each other. You're using the ZIP code value to directly place them.

---

## 2. The Core Idea

Bucket Sort works in three phases:

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│   1. SCATTER  →  Distribute elements into buckets            │
│   2. SORT     →  Sort each individual bucket                 │
│   3. GATHER   →  Concatenate all buckets in order            │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Why is this fast?**

If `n` elements are distributed **uniformly** across `k` buckets:
- Each bucket has ~`n/k` elements
- Sorting each bucket (with insertion sort) takes O((n/k)²)
- Total: `k × O((n/k)²)` = O(n²/k)
- With `k = n` buckets: O(n²/n) = **O(n)** ✓

---

## 3. Step-by-Step Walkthrough

### Example: Sort `[29, 25, 3, 49, 9, 37, 21, 43]`

**Step 0 — Determine range and bucket count**
```
min = 3, max = 49
range = 49 - 3 = 46
bucketCount = 5
bucketSize = ceil(46 / 5) = 10
```

**Step 1 — SCATTER (distribute into buckets)**
```
Bucket index = floor((value - min) / bucketSize)

  3  → floor((3  - 3) / 10) = 0
  9  → floor((9  - 3) / 10) = 0
 21  → floor((21 - 3) / 10) = 1
 25  → floor((25 - 3) / 10) = 2
 29  → floor((29 - 3) / 10) = 2
 37  → floor((37 - 3) / 10) = 3
 43  → floor((43 - 3) / 10) = 4
 49  → floor((49 - 3) / 10) = 4  (clamped to last bucket)

Buckets after scatter:
  [0]: [3, 9]
  [1]: [21]
  [2]: [25, 29]
  [3]: [37]
  [4]: [43, 49]
```

**Step 2 — SORT each bucket**
```
  [0]: [3, 9]       ← already sorted
  [1]: [21]          ← single element
  [2]: [25, 29]      ← already sorted
  [3]: [37]          ← single element
  [4]: [43, 49]      ← already sorted
```

**Step 3 — GATHER (concatenate)**
```
Result: [3, 9, 21, 25, 29, 37, 43, 49]  ✓
```

---

## 4. Generic Bucket Sort — Code Template

```javascript
/**
 * Bucket Sort — Generic Template
 * 
 * Time:  O(n) average, O(n²) worst case
 * Space: O(n + k) where k = number of buckets
 * 
 * @param {number[]} arr - Array of numbers to sort
 * @param {number} bucketCount - Number of buckets (default: arr.length)
 * @returns {number[]} Sorted array
 */
function bucketSort(arr, bucketCount = arr.length) {
    const n = arr.length;
    if (n <= 1) return arr;

    // 1. Find the range
    let min = Infinity, max = -Infinity;
    for (const num of arr) {
        min = Math.min(min, num);
        max = Math.max(max, num);
    }

    if (min === max) return arr; // all elements identical

    // 2. Calculate bucket size
    const bucketSize = (max - min) / bucketCount;

    // 3. Create empty buckets
    const buckets = Array.from({ length: bucketCount }, () => []);

    // 4. SCATTER: distribute elements into buckets
    for (const num of arr) {
        // Clamp to last bucket for the max element
        const idx = Math.min(
            Math.floor((num - min) / bucketSize),
            bucketCount - 1
        );
        buckets[idx].push(num);
    }

    // 5. SORT each bucket (insertion sort for small buckets)
    // 6. GATHER: concatenate
    const result = [];
    for (const bucket of buckets) {
        insertionSort(bucket);
        for (const num of bucket) {
            result.push(num);
        }
    }

    return result;
}

/**
 * Insertion Sort — ideal for small arrays (used inside each bucket)
 */
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}
```

### Key Formula

```
bucketIndex = floor((value - min) / bucketSize)
```

This is the heart of bucket sort. It maps a **value** directly to a **position** without comparing it to other elements.

---

## 5. Complexity Analysis

### Time Complexity

| Case | Complexity | Explanation |
|------|-----------|-------------|
| **Best** | **O(n)** | Elements uniformly distributed; each bucket has ~1 element |
| **Average** | **O(n)** | With uniform distribution and k ≈ n buckets |
| **Worst** | **O(n²)** | All elements land in one bucket → insertion sort on n elements |

### Space Complexity

| | Complexity |
|---|---|
| **Buckets** | O(k) |
| **Elements in buckets** | O(n) |
| **Total** | O(n + k) |

### Why O(n) on Average? (The Math)

With `n` elements and `n` buckets, assuming uniform distribution:
- Expected elements per bucket = n/n = 1
- Sorting each bucket = O(1²) = O(1)
- Total = n × O(1) = **O(n)**

Even with `k < n` buckets:
- Each bucket has n/k elements
- Sorting each = O((n/k)²)
- Total = k × (n/k)² = n²/k
- With k = Θ(n) → **O(n)**

---

## 6. The Family of Linear-Time Sorts

All three use the same trick: **avoid element-to-element comparisons**.

### 6.1 Counting Sort

**Idea**: Count how many times each value appears, then reconstruct.

**Best for**: Small integer ranges (e.g., ages 0-150, ASCII characters 0-127)

```javascript
function countingSort(arr) {
    const max = Math.max(...arr);
    const count = new Array(max + 1).fill(0);

    // Count occurrences
    for (const num of arr) {
        count[num]++;
    }

    // Reconstruct
    const result = [];
    for (let i = 0; i <= max; i++) {
        while (count[i] > 0) {
            result.push(i);
            count[i]--;
        }
    }
    return result;
}
```

```
Input:  [4, 2, 2, 8, 3, 3, 1]
Count:  [0, 1, 2, 2, 1, 0, 0, 0, 1]
         0  1  2  3  4  5  6  7  8
Output: [1, 2, 2, 3, 3, 4, 8]
```

**Complexity**: O(n + k) time, O(k) space — where k is the range of values

**Limitation**: Impractical when range is huge (e.g., values 0 to 10⁹)

---

### 6.2 Bucket Sort

**Idea**: Divide range into buckets, distribute, sort each bucket.

**Best for**: Uniformly distributed data, floating-point numbers

*(Covered in detail above)*

**Relationship to Counting Sort**: Counting Sort is a **special case** of Bucket Sort where each bucket holds exactly one value.

---

### 6.3 Radix Sort

**Idea**: Sort digit-by-digit, from least significant to most significant (LSD), using a **stable** sort (usually counting sort) on each digit.

**Best for**: Fixed-length integers, strings, phone numbers

```javascript
function radixSort(arr) {
    const max = Math.max(...arr);

    // Process each digit position
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countingSortByDigit(arr, exp);
    }
    return arr;
}

function countingSortByDigit(arr, exp) {
    const n = arr.length;
    const output = new Array(n);
    const count = new Array(10).fill(0);

    // Count occurrences of each digit
    for (const num of arr) {
        const digit = Math.floor(num / exp) % 10;
        count[digit]++;
    }

    // Cumulative count (for stable placement)
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // Build output (traverse right-to-left for stability)
    for (let i = n - 1; i >= 0; i--) {
        const digit = Math.floor(arr[i] / exp) % 10;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }

    // Copy back
    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}
```

```
Input: [170, 45, 75, 90, 802, 24, 2, 66]

Pass 1 (ones digit):  [170, 90, 802, 2, 24, 45, 75, 66]
Pass 2 (tens digit):  [802, 2, 24, 45, 66, 170, 75, 90]
Pass 3 (hundreds):    [2, 24, 45, 66, 75, 90, 170, 802]  ✓
```

**Complexity**: O(d × (n + k)) — d = number of digits, k = base (usually 10)

---

### Comparison Table

```
┌─────────────┬──────────────┬───────────┬───────────────────────────────────┐
│  Algorithm  │    Time      │   Space   │   Best Use Case                   │
├─────────────┼──────────────┼───────────┼───────────────────────────────────┤
│ Counting    │ O(n + k)     │ O(k)      │ Small integer range               │
│ Sort        │              │           │ e.g., ages, ASCII chars            │
├─────────────┼──────────────┼───────────┼───────────────────────────────────┤
│ Bucket      │ O(n) avg     │ O(n + k)  │ Uniformly distributed data        │
│ Sort        │ O(n²) worst  │           │ e.g., floats in [0,1), scores     │
├─────────────┼──────────────┼───────────┼───────────────────────────────────┤
│ Radix       │ O(d(n + k))  │ O(n + k)  │ Fixed-width integers/strings      │
│ Sort        │              │           │ e.g., phone numbers, IPs          │
└─────────────┴──────────────┴───────────┴───────────────────────────────────┘
```

### How They Relate

```
                    Counting Sort
                   (one bucket per value)
                         │
                         │ generalize
                         ▼
                    Bucket Sort
                   (range of values per bucket)
                         │
                         │ use as subroutine
                         ▼
                    Radix Sort
                   (apply counting sort per digit)
```

---

## 7. Bucket Sort Variations & Patterns

In interviews, you rarely implement a "full" bucket sort. Instead, you use the **bucket concept** in different patterns:

### Pattern 1: Full Sort

Use when you need a fully sorted array in O(n).

```
Scatter → Sort each bucket → Gather
```

*Rarely appears in interviews. More common in system design (e.g., sorting log entries by timestamp).*

---

### Pattern 2: Pigeonhole Principle (Gap Problems)

> **Key Insight**: If n items go into k buckets and n > k, at least one bucket has 2+ items.
>
> **Contrapositive**: If bucket size < minimum possible gap, the answer gap MUST span across buckets.

This is the **most common interview pattern**. You don't sort inside buckets — you only track **min and max** per bucket.

```javascript
// Template: Find max gap between consecutive elements
function maxGapTemplate(arr) {
    const n = arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    const bucketSize = Math.max(1, Math.floor((max - min) / (n - 1)));
    const bucketCount = Math.floor((max - min) / bucketSize) + 1;

    const bucketMin = new Array(bucketCount).fill(Infinity);
    const bucketMax = new Array(bucketCount).fill(-Infinity);
    const used = new Array(bucketCount).fill(false);

    for (const num of arr) {
        const idx = Math.floor((num - min) / bucketSize);
        used[idx] = true;
        bucketMin[idx] = Math.min(bucketMin[idx], num);
        bucketMax[idx] = Math.max(bucketMax[idx], num);
    }

    let maxGap = 0, prevMax = bucketMax[0];
    for (let i = 1; i < bucketCount; i++) {
        if (!used[i]) continue;
        maxGap = Math.max(maxGap, bucketMin[i] - prevMax);
        prevMax = bucketMax[i];
    }
    return maxGap;
}
```

**Used in**: LeetCode 164 (Maximum Gap), LeetCode 220 (Contains Duplicate III)

---

### Pattern 3: Frequency Bucketing

Instead of bucketing by **value**, bucket by **frequency**.

```javascript
// Template: Top K Frequent Elements
function topKFrequent(nums, k) {
    // Step 1: Count frequencies
    const freq = new Map();
    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    // Step 2: Create frequency buckets (index = frequency)
    const buckets = Array.from({ length: nums.length + 1 }, () => []);
    for (const [num, count] of freq) {
        buckets[count].push(num);
    }

    // Step 3: Gather from highest frequency first
    const result = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        result.push(...buckets[i]);
    }
    return result.slice(0, k);
}
```

**Used in**: LeetCode 347 (Top K Frequent), LeetCode 451 (Sort Characters By Frequency)

---

### Pattern 4: Value-Range Bucketing

Use buckets to check if **any element within a value range** exists. Instead of checking all pairs, bucket by value range and only check adjacent buckets.

```javascript
// Concept: Does any pair (i,j) exist where |nums[i] - nums[j]| <= t?
// If bucket size = t+1, then:
//   - Same bucket → definitely within range
//   - Adjacent bucket → check the values
//   - 2+ buckets apart → definitely out of range
```

**Used in**: LeetCode 220 (Contains Duplicate III)

---

## 8. When to Use / When NOT to Use

### ✅ USE Bucket Sort When:

| Signal in Problem | Why |
|---|---|
| "Return result in **linear time**" | Only non-comparison sorts can do this |
| Data is **uniformly distributed** | Guarantees even bucket distribution |
| You know the **range** of values | Needed to calculate bucket size |
| Problem involves **gaps / spacing** between values | Pigeonhole principle applies directly |
| Problem involves **frequency ranking** | Frequency bucketing pattern |
| Problem says "**successive elements in sorted form**" | Gap + bucket sort pattern |

### ❌ DON'T USE When:

| Signal | Why |
|---|---|
| Data is **heavily skewed** | All elements in one bucket → O(n²) |
| Range is **unknown or infinite** | Can't calculate bucket size |
| You need a **stable, general-purpose** sort | Use MergeSort instead |
| Data has **non-numeric** keys without clear bucketing | Comparison sort is easier |

---

## 9. Practice Problems (Ordered by Difficulty)

### Tier 1: Counting Sort Basics
| # | Problem | Pattern | Difficulty |
|---|---------|---------|------------|
| 75 | [Sort Colors](https://leetcode.com/problems/sort-colors/) | Counting sort (only 3 values: 0,1,2) | Easy-Med |
| 274 | [H-Index](https://leetcode.com/problems/h-index/) | Counting sort on citation counts | Medium |
| 1122 | [Relative Sort Array](https://leetcode.com/problems/relative-sort-array/) | Counting sort with custom order | Easy |

### Tier 2: Frequency Bucketing
| # | Problem | Pattern | Difficulty |
|---|---------|---------|------------|
| 347 | [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) | Frequency bucketing | Medium |
| 451 | [Sort Characters By Frequency](https://leetcode.com/problems/sort-characters-by-frequency/) | Frequency bucketing | Medium |
| 692 | [Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/) | Frequency bucketing + tie-breaking | Medium |

### Tier 3: Pigeonhole / Gap Problems
| # | Problem | Pattern | Difficulty |
|---|---------|---------|------------|
| 164 | [Maximum Gap](https://leetcode.com/problems/maximum-gap/) | Pigeonhole principle + bucket min/max | Hard |
| 220 | [Contains Duplicate III](https://leetcode.com/problems/contains-duplicate-iii/) | Value-range bucketing with sliding window | Hard |

### Tier 4: Radix Sort
| # | Problem | Pattern | Difficulty |
|---|---------|---------|------------|
| 179 | [Largest Number](https://leetcode.com/problems/largest-number/) | Custom sort (radix-like thinking) | Medium |
| 1235 | [Max Profit in Job Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling/) | Sorting + DP (can optimize sort step) | Hard |

### Suggested Practice Order

```
75 → 1122 → 274 → 347 → 451 → 692 → 164 → 220
│           │           │                │
▼           ▼           ▼                ▼
Counting    Counting    Frequency        Pigeonhole
Sort        Sort +      Bucketing        Principle
Basics      Range                        (Advanced)
```

---

## 10. LeetCode 164 — Maximum Gap (Solved)

### Problem
Given an unsorted array, find the maximum gap between successive elements in sorted form, in **O(n) time**.

### Why Bucket Sort?

The problem explicitly requires O(n) time → can't use comparison-based sort (O(n log n)).

### The Pigeonhole Insight

```
n elements in range [min, max]
Average gap = (max - min) / (n - 1)

If we make bucket size = average gap:
  → Max gap ≥ average gap
  → Max gap > bucket size
  → Max gap CANNOT be within a single bucket
  → Max gap MUST be between consecutive buckets
  → Only need to track min/max per bucket
```

### Solution

```javascript
var maximumGap = function (nums) {
    const n = nums.length;
    if (n < 2) return 0;

    // 1. Find range
    let min = Infinity, max = -Infinity;
    for (const num of nums) {
        min = Math.min(min, num);
        max = Math.max(max, num);
    }

    if (min === max) return 0;

    // 2. Calculate bucket size (= average gap, at least 1)
    const bucketSize = Math.max(1, Math.floor((max - min) / (n - 1)));
    const bucketCount = Math.floor((max - min) / bucketSize) + 1;

    // 3. Only track min and max per bucket (no full sort needed!)
    const bucketMin = new Array(bucketCount).fill(Infinity);
    const bucketMax = new Array(bucketCount).fill(-Infinity);
    const bucketUsed = new Array(bucketCount).fill(false);

    // 4. Scatter
    for (const num of nums) {
        const idx = Math.floor((num - min) / bucketSize);
        bucketUsed[idx] = true;
        bucketMin[idx] = Math.min(bucketMin[idx], num);
        bucketMax[idx] = Math.max(bucketMax[idx], num);
    }

    // 5. Scan across buckets for max gap
    let maxGap = 0;
    let prevMax = bucketMax[0];

    for (let i = 1; i < bucketCount; i++) {
        if (!bucketUsed[i]) continue;
        maxGap = Math.max(maxGap, bucketMin[i] - prevMax);
        prevMax = bucketMax[i];
    }

    return maxGap;
};
```

### Dry Run

```
nums = [3, 6, 9, 1]

min = 1, max = 9, n = 4
bucketSize = max(1, floor((9-1)/(4-1))) = max(1, 2) = 2
bucketCount = floor((9-1)/2) + 1 = 5

Scatter:
  1 → idx 0  →  bucket[0]: min=1, max=1
  3 → idx 1  →  bucket[1]: min=3, max=3
  6 → idx 2  →  bucket[2]: min=6, max=6
  9 → idx 4  →  bucket[4]: min=9, max=9

Scan:
  prevMax = 1
  i=1: used ✓ → gap = 3 - 1 = 2  → maxGap = 2, prevMax = 3
  i=2: used ✓ → gap = 6 - 3 = 3  → maxGap = 3, prevMax = 6
  i=3: NOT used → skip
  i=4: used ✓ → gap = 9 - 6 = 3  → maxGap = 3, prevMax = 9

Answer: 3 ✓
```

---

## Quick Reference Card

```
┌──────────────────────────────────────────────────────────────────┐
│                    BUCKET SORT CHEAT SHEET                       │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Formula:  bucketIndex = floor((value - min) / bucketSize)       │
│                                                                  │
│  3 Steps:  SCATTER → SORT → GATHER                              │
│                                                                  │
│  O(n) when: k ≈ n buckets AND uniform distribution              │
│                                                                  │
│  Interview Signals:                                              │
│    • "linear time" → think bucket / counting / radix             │
│    • "maximum gap" → pigeonhole + bucket min/max                 │
│    • "top K frequent" → frequency bucketing                      │
│    • "sort with small range" → counting sort                     │
│                                                                  │
│  Pitfalls:                                                       │
│    • Handle min === max (all same elements)                      │
│    • bucketSize must be ≥ 1 (integer division edge case)         │
│    • Clamp max element to last bucket                            │
│    • Skip empty buckets when scanning for gaps                   │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

---

*Last updated: April 13, 2026*
