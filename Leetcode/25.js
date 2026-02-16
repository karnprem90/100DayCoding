/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    if (!head || k === 1) return head;

    // 1. Calculate total count
    let totalCount = 0;
    let cursor = head;
    while (cursor) {
        totalCount++;
        cursor = cursor.next;
    }

    // 2. Use a dummy node to handle the case where head changes
    let dummy = new ListNode(0);
    dummy.next = head;
    
    // Pointer to the node BEFORE the current group (initially dummy)
    let prevGroupEnd = dummy;

    // 3. Loop while we have enough nodes left (>= k)
    while (totalCount >= k) {
        let groupStart = prevGroupEnd.next;
        let groupEnd = groupStart;

        // Move groupEnd to the k-th node of the current group
        for (let i = 1; i < k; i++) {
            groupEnd = groupEnd.next;
        }

        // Store the start of the NEXT group
        let nextGroupStart = groupEnd.next;

        // CRITICAL STEP: Cut the list temporarily
        // This ensures reverseLinkedList stops exactly where we want
        groupEnd.next = null;

        // Reverse the isolated group
        let newGroupHead = reverseLinkedList(groupStart);

        // Reconnect the reversed group
        // 1. Connect previous part to the NEW head of this group
        prevGroupEnd.next = newGroupHead;
        
        // 2. Connect the NEW tail (old start) to the next group
        groupStart.next = nextGroupStart;

        // Move pointers for next iteration
        // prevGroupEnd becomes the tail of the group we just processed
        prevGroupEnd = groupStart;
        
        totalCount -= k;
    }

    return dummy.next;
};

function reverseLinkedList(list) {
    let prev = null;
    let current = list;
    let next = null;
    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}

// Helper to create list for testing
function createList(arr) {
    let dummy = new ListNode(0);
    let curr = dummy;
    for (let val of arr) {
        curr.next = new ListNode(val);
        curr = curr.next;
    }
    return dummy.next;
}

// Helper to print list
function printList(head) {
    let arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    console.log(arr);
}

// Mock ListNode for local execution
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// Test
let head = createList([1, 2, 3, 4, 5]);
console.log("Original: [1, 2, 3, 4, 5], k=2");
let newHead = reverseKGroup(head, 2);
printList(newHead);

let head2 = createList([1, 2, 3, 4, 5]);
console.log("Original: [1, 2, 3, 4, 5], k=3");
let newHead2 = reverseKGroup(head2, 3);
printList(newHead2);