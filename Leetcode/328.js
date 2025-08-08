/**
 * Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.
 *
 * The first node is considered odd, and the second node is even, and so on.
 *
 * Note that the relative order inside both the even and odd groups should remain as it was in the input.
 *
 * You must solve the problem in O(1) extra space complexity and O(n) time complexity.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: head = [1,2,3,4,5]
 * Output: [1,3,5,2,4]
 * Example 2:
 *
 *
 * Input: head = [2,1,3,5,6,4,7]
 * Output: [2,3,6,7,1,5,4]
 *
 *
 * Constraints:
 *
 * The number of nodes in the linked list is in the range [0, 104].
 * -106 <= Node.val <= 106
 */



 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function oddEvenList(head) {
    // Edge cases: empty list or single node
    if (!head || !head.next) {
        return head;
    }

    // Initialize pointers
    let odd = head;              // Points to current odd-positioned node
    let even = head.next;        // Points to current even-positioned node
    let evenHead = even;         // Keep reference to first even node

    // Traverse and rearrange
    while (even && even.next) {
        // Connect current odd to next odd node
        odd.next = even.next;
        odd = odd.next;

        // Connect current even to next even node
        even.next = odd.next;
        even = even.next;
    }

    // Connect end of odd chain to beginning of even chain
    odd.next = evenHead;

    return head;
}

const list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(5);

console.log(oddEvenList(list));