/**
 * 1051. Height Checker - Using Counting Sort
 */
var heightChecker = function(heights) {
    let count = new Array(101).fill(0);
    for (let h of heights) count[h]++;
    
    let expected = [];
    for (let h = 1; h <= 100; h++) {
        while (count[h] > 0) {
            expected.push(h);
            count[h]--;
        }
    }
    
    let mismatches = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== expected[i]) mismatches++;
    }
    return mismatches;
};

// ═══════════════════════════════════════════════════════════════
//                    COUNTING SORT - THEORY
// ═══════════════════════════════════════════════════════════════

console.log("╔═══════════════════════════════════════════════════════════════╗");
console.log("║                 COUNTING SORT - HOW IT WORKS                  ║");
console.log("╚═══════════════════════════════════════════════════════════════╝");
console.log("");
console.log("   🔹 WHAT IS IT?");
console.log("   ──────────────");
console.log("   A sorting algorithm that COUNTS how many times each value appears,");
console.log("   then rebuilds the sorted array from those counts.");
console.log("");
console.log("   Unlike comparison sorts (bubble, merge, quick), it NEVER compares");
console.log("   two elements. It just counts and places.");
console.log("");
console.log("   🔹 THE ALGORITHM (3 Steps)");
console.log("   ──────────────────────────");
console.log("   1. CREATE a count array where index = value");
console.log("   2. COUNT frequency of each value in input");
console.log("   3. BUILD sorted array by reading counts in order");
console.log("");
console.log("   🔹 VISUAL ANALOGY");
console.log("   ─────────────────");
console.log("   Imagine sorting playing cards by number:");
console.log("");
console.log("   Normal way: Compare cards, swap, compare, swap...");
console.log("");
console.log("   Counting way: Make 13 piles (one for each number)");
console.log("                 Put each card in its pile");
console.log("                 Collect piles in order → SORTED!");
console.log("");
console.log("   🔹 TIME & SPACE COMPLEXITY");
console.log("   ──────────────────────────");
console.log("   Time:  O(n + k)   where n = array size, k = range of values");
console.log("   Space: O(k)       for the count array");
console.log("");
console.log("   Compare with regular sort:");
console.log("   ┌─────────────────┬───────────────┬─────────────────┐");
console.log("   │ Algorithm       │ Time          │ Space           │");
console.log("   ├─────────────────┼───────────────┼─────────────────┤");
console.log("   │ Array.sort()    │ O(n log n)    │ O(log n)        │");
console.log("   │ Counting Sort   │ O(n + k)      │ O(k)            │");
console.log("   └─────────────────┴───────────────┴─────────────────┘");
console.log("");
console.log("   When k < n log n, counting sort wins!");
console.log("   Example: n=1000, k=100 → 1100 vs 10000 operations");
console.log("");
console.log("   🔹 CODE BREAKDOWN");
console.log("   ─────────────────");
console.log("   // Step 1: Create count array");
console.log("   let count = new Array(101).fill(0);  // 101 because heights 1-100");
console.log("");
console.log("   // Step 2: Count each value");
console.log("   for (let h of heights) count[h]++;");
console.log("");
console.log("   // Step 3: Build sorted array");
console.log("   for (let h = 1; h <= 100; h++) {");
console.log("       while (count[h] > 0) {");
console.log("           result.push(h);");
console.log("           count[h]--;");
console.log("       }");
console.log("   }");
console.log("");

console.log("╔═══════════════════════════════════════════════════════════════╗");
console.log("║              5 EXAMPLES - LEARN BY DOING                      ║");
console.log("╚═══════════════════════════════════════════════════════════════╝");

console.log("╔═══════════════════════════════════════════════════════════════╗");
console.log("║            EXAMPLE 1: Sort [3, 1, 2]                          ║");
console.log("╚═══════════════════════════════════════════════════════════════╝");
console.log("");
console.log("   Input: [3, 1, 2]");
console.log("");
console.log("   STEP 1: Count each number");
console.log("   ─────────────────────────");
console.log("   count[1] = 1     (one 1)");
console.log("   count[2] = 1     (one 2)");
console.log("   count[3] = 1     (one 3)");
console.log("");
console.log("   STEP 2: Build sorted array");
console.log("   ──────────────────────────");
console.log("   Read count[1] → add 1 → [1]");
console.log("   Read count[2] → add 2 → [1, 2]");
console.log("   Read count[3] → add 3 → [1, 2, 3]");
console.log("");
console.log("   ✅ Sorted: [1, 2, 3]");
console.log("");

console.log("╔═══════════════════════════════════════════════════════════════╗");
console.log("║            EXAMPLE 2: Sort [4, 2, 2, 1, 4]                    ║");
console.log("╚═══════════════════════════════════════════════════════════════╝");
console.log("");
console.log("   Input: [4, 2, 2, 1, 4]");
console.log("");
console.log("   STEP 1: Count each number");
console.log("   ─────────────────────────");
console.log("   count[1] = 1     (one 1)");
console.log("   count[2] = 2     (two 2s)");
console.log("   count[3] = 0     (no 3s)");
console.log("   count[4] = 2     (two 4s)");
console.log("");
console.log("   STEP 2: Build sorted array");
console.log("   ──────────────────────────");
console.log("   count[1]=1 → add one 1   → [1]");
console.log("   count[2]=2 → add two 2s  → [1, 2, 2]");
console.log("   count[3]=0 → skip        → [1, 2, 2]");
console.log("   count[4]=2 → add two 4s  → [1, 2, 2, 4, 4]");
console.log("");
console.log("   ✅ Sorted: [1, 2, 2, 4, 4]");
console.log("");

console.log("╔═══════════════════════════════════════════════════════════════╗");
console.log("║            EXAMPLE 3: Height Checker [1, 1, 4, 2, 1, 3]       ║");
console.log("╚═══════════════════════════════════════════════════════════════╝");
console.log("");
console.log("   Input: heights = [1, 1, 4, 2, 1, 3]");
console.log("");
console.log("   STEP 1: Count each height");
console.log("   ─────────────────────────");
console.log("   count[1] = 3");
console.log("   count[2] = 1");
console.log("   count[3] = 1");
console.log("   count[4] = 1");
console.log("");
console.log("   STEP 2: Build expected (sorted) array");
console.log("   ─────────────────────────────────────");
console.log("   count[1]=3 → [1, 1, 1]");
console.log("   count[2]=1 → [1, 1, 1, 2]");
console.log("   count[3]=1 → [1, 1, 1, 2, 3]");
console.log("   count[4]=1 → [1, 1, 1, 2, 3, 4]");
console.log("");
console.log("   STEP 3: Compare");
console.log("   ───────────────");
console.log("   Index:     0   1   2   3   4   5");
console.log("   heights:  [1] [1] [4] [2] [1] [3]");
console.log("   expected: [1] [1] [1] [2] [3] [4]");
console.log("              ✓   ✓   ✗   ✓   ✗   ✗");
console.log("");
console.log("   ✅ Answer:", heightChecker([1,1,4,2,1,3]), "mismatches");
console.log("");

console.log("╔═══════════════════════════════════════════════════════════════╗");
console.log("║            EXAMPLE 4: Height Checker [5, 1, 2, 3, 4]          ║");
console.log("╚═══════════════════════════════════════════════════════════════╝");
console.log("");
console.log("   Input: heights = [5, 1, 2, 3, 4]");
console.log("");
console.log("   STEP 1: Count");
console.log("   ─────────────");
console.log("   count[1]=1, count[2]=1, count[3]=1, count[4]=1, count[5]=1");
console.log("");
console.log("   STEP 2: Build expected");
console.log("   ──────────────────────");
console.log("   → [1, 2, 3, 4, 5]");
console.log("");
console.log("   STEP 3: Compare");
console.log("   ───────────────");
console.log("   Index:     0   1   2   3   4");
console.log("   heights:  [5] [1] [2] [3] [4]");
console.log("   expected: [1] [2] [3] [4] [5]");
console.log("              ✗   ✗   ✗   ✗   ✗");
console.log("");
console.log("   ✅ Answer:", heightChecker([5,1,2,3,4]), "mismatches (all wrong!)");
console.log("");

console.log("╔═══════════════════════════════════════════════════════════════╗");
console.log("║            EXAMPLE 5: Sort grades [85, 90, 85, 70, 90, 70]    ║");
console.log("╚═══════════════════════════════════════════════════════════════╝");
console.log("");
console.log("   Task: Sort student grades [85, 90, 85, 70, 90, 70]");
console.log("");
console.log("   STEP 1: Count each grade");
console.log("   ────────────────────────");
console.log("   count[70] = 2");
console.log("   count[85] = 2");
console.log("   count[90] = 2");
console.log("");
console.log("   STEP 2: Build sorted");
console.log("   ────────────────────");
console.log("   count[70]=2 → [70, 70]");
console.log("   count[85]=2 → [70, 70, 85, 85]");
console.log("   count[90]=2 → [70, 70, 85, 85, 90, 90]");
console.log("");
console.log("   ✅ Sorted: [70, 70, 85, 85, 90, 90]");
console.log("");

console.log("╔═══════════════════════════════════════════════════════════════╗");
console.log("║                  WHEN TO USE COUNTING SORT?                   ║");
console.log("╚═══════════════════════════════════════════════════════════════╝");
console.log("");
console.log("   ✓ USE when:");
console.log("   • Values are INTEGERS");
console.log("   • Range is SMALL (e.g., ages 0-120, grades 0-100, heights 1-200)");
console.log("   • You have MANY items to sort");
console.log("");
console.log("   ✗ DON'T use when:");
console.log("   • Values are decimals (3.14, 2.71)");
console.log("   • Range is HUGE (1 to 1,000,000,000)");
console.log("   • Sorting strings or objects");
console.log("");
console.log("   EXAMPLES where counting sort fits:");
console.log("   • Ages of people (0-120)");
console.log("   • Exam scores (0-100)");
console.log("   • Student heights (50-250 cm)");
console.log("   • Frequency of characters (a-z = 26 values)");
console.log("");