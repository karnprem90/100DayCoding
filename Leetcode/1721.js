/**
 * You are given the head of a linked list, and an integer k.
 *
 * Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).
 *
 *
 *
 * Example 1:
 *
 *
 * Input: head = [1,2,3,4,5], k = 2
 * Output: [1,4,3,2,5]
 * Example 2:
 *
 * Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
 * Output: [7,9,6,6,8,7,3,0,9,5]
 */


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    if (!head) {
        return null;
    }
    let left = head;
    let right = head;
    for (let i = 1; i < k; i++) {
        left = left.next;
    }
    let curr = left;
    while (curr.next) {
        curr = curr.next;
        right = right.next;
    }

    let temp = left.val;
    left.val = right.val;
    right.val = temp;
    return head;
};

const ll = new ListNode(7);
ll.next = new ListNode(9);
ll.next.next = new ListNode(6);
ll.next.next.next = new ListNode(6);
ll.next.next.next.next = new ListNode(7);
ll.next.next.next.next.next = new ListNode(8);
ll.next.next.next.next.next.next = new ListNode(3);
ll.next.next.next.next.next.next.next = new ListNode(0);
ll.next.next.next.next.next.next.next.next = new ListNode(9);
ll.next.next.next.next.next.next.next.next.next = new ListNode(5);


let k = 5;

console.log(swapNodes(ll, k));