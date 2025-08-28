/**
 * RandomizedCollection is a data structure that contains a collection of numbers, possibly duplicates (i.e., a multiset). It should support inserting and removing specific elements and also reporting a random element.
 *
 * Implement the RandomizedCollection class:
 *
 * RandomizedCollection() Initializes the empty RandomizedCollection object.
 * bool insert(int val) Inserts an item val into the multiset, even if the item is already present. Returns true if the item is not present, false otherwise.
 * bool remove(int val) Removes an item val from the multiset if present. Returns true if the item is present, false otherwise. Note that if val has multiple occurrences in the multiset, we only remove one of them.
 * int getRandom() Returns a random element from the current multiset of elements. The probability of each element being returned is linearly related to the number of the same values the multiset contains.
 * You must implement the functions of the class such that each function works on average O(1) time complexity.
 *
 * Note: The test cases are generated such that getRandom will only be called if there is at least one item in the RandomizedCollection.
 *
 *
 *
 * Example 1:
 *
 * Input
 * ["RandomizedCollection", "insert", "insert", "insert", "getRandom", "remove", "getRandom"]
 * [[], [1], [1], [2], [], [1], []]
 * Output
 * [null, true, false, true, 2, true, 1]
 *
 * Explanation
 * RandomizedCollection randomizedCollection = new RandomizedCollection();
 * randomizedCollection.insert(1);   // return true since the collection does not contain 1.
 *                                   // Inserts 1 into the collection.
 * randomizedCollection.insert(1);   // return false since the collection contains 1.
 *                                   // Inserts another 1 into the collection. Collection now contains [1,1].
 * randomizedCollection.insert(2);   // return true since the collection does not contain 2.
 *                                   // Inserts 2 into the collection. Collection now contains [1,1,2].
 * randomizedCollection.getRandom(); // getRandom should:
 *                                   // - return 1 with probability 2/3, or
 *                                   // - return 2 with probability 1/3.
 * randomizedCollection.remove(1);   // return true since the collection contains 1.
 *                                   // Removes 1 from the collection. Collection now contains [1,2].
 * randomizedCollection.getRandom(); // getRandom should return 1 or 2, both equally likely.
 *
 *
 * Constraints:
 *
 * -231 <= val <= 231 - 1
 * At most 2 * 105 calls in total will be made to insert, remove, and getRandom.
 * There will be at least one element in the data structure when getRandom is called.
 */


var RandomizedCollection = function() {
    this.list = [];                 // flat array of all values
    this.randomObject = new Map();  // val -> Set(indices in list)
};

RandomizedCollection.prototype.insert = function(val) {
    if (!this.randomObject.has(val)) this.randomObject.set(val, new Set());
    const idx = this.list.length;
    this.list.push(val);
    this.randomObject.get(val).add(idx);
    // return true iff it wasn't present before
    return this.randomObject.get(val).size === 1;
};

RandomizedCollection.prototype.remove = function(val) {
    const set = this.randomObject.get(val);
    if (!set || set.size === 0) return false;

    // pick any index to remove
    const idx = set.values().next().value;
    const lastIdx = this.list.length - 1;
    const lastVal = this.list[lastIdx];

    // move last element to idx
    this.list[idx] = lastVal;

    // --- CRUCIAL ORDER ---
    set.delete(idx);                           // 1) remove idx from val's set
    const lastSet = this.randomObject.get(lastVal);
    lastSet.delete(lastIdx);                   // 2) remove old last index
    if (idx !== lastIdx) lastSet.add(idx);     // 3) add new idx for lastVal

    // pop last
    this.list.pop();

    // cleanup
    if (set.size === 0) this.randomObject.delete(val);

    return true;
};

RandomizedCollection.prototype.getRandom = function() {
    const n = this.list.length;
    return this.list[Math.floor(Math.random() * n)];
};


 var obj = new RandomizedCollection()
 var param_1 = obj.insert(1);
 console.log(param_1);
 var param_2 = obj.insert(1)
 console.log(param_2);
 var param_3 =  obj.insert(2)
console.log(param_3);
 var param_4 = obj.getRandom();
 console.log(param_4);
 var param_5 = obj.remove(1);
 console.log(param_5);
 var param_6 = obj.getRandom();
 console.log(param_6);
// var param1 = obj.insert(1);
// console.log(param1);
// var param2 = obj.remove(1);
// console.log(param2);
// var param3 = obj.insert(1);
// console.log(param3);
