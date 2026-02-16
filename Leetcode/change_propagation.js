
// Mock ListNode
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Global Variables to Simulate Memory
let memory = {}; // Maps ID to Node Object

console.log('=== WHY DOES groupStart CHANGE WHEN WE CHANGE groupEnd? ===\n');

// 1. Create Nodes 1 and 2
let node1 = new ListNode(1); // Address A
let node2 = new ListNode(2); // Address B
node1.next = node2;          // A points to B

// 2. Set pointers
let groupStart = node1;      // groupStart points to A
let groupEnd = node1;        // groupEnd points to A

// 3. Move groupEnd forward
groupEnd = groupEnd.next;    // groupEnd now points to B (Node 2)

console.log('Initial State:');
console.log('groupStart points to Node 1 (Address A)');
console.log('groupEnd   points to Node 2 (Address B)');
console.log(`Node 1 points to: Node ${node1.next.val} (Address B)`);
console.log(`Node 2 points to: ${node2.next} (null)`);

console.log('\n--- OPERATION: groupEnd.next = null ---');
// We are modifying the object at Address B.
groupEnd.next = null; 
// In this specific case, Node 2 was already pointing to null, 
// so let's imagine a Node 3 exists to make it interesting.

let node3 = new ListNode(3); // Address C
node2.next = node3;          // B points to C

console.log('\nOkay, let\'s add Node 3. New State:');
console.log('1 -> 2 -> 3');
console.log(`groupStart points to Node 1. Node 1.next is Node 2.`);
console.log(`groupEnd points to Node 2.   Node 2.next is Node 3.`);

console.log('\n--- NOW WE CUT ---');
groupEnd.next = null; // We go to Address B and set .next to null.

console.log('Result:');
console.log('Does groupStart change? NO. It still points to Node 1.');
console.log('Does Node 1 change?     NO. It still points to Node 2.');
console.log('Does Node 2 change?     YES! Its .next is now null.');

console.log('\nSo if you traverse from groupStart (Node 1):');
console.log('1. Go to Node 1.');
console.log('2. Follow .next to Node 2.');
console.log('3. Follow .next ... IT IS NULL!');
console.log('So the list starting at groupStart is now: 1 -> 2 -> null.');
