/**
 * Given a non-negative integer represented as a linked list of digits, plus one to the integer.
 *
 * The digits are stored such that the most significant digit is at the head of the list.
 *
 *
 *
 * Example 1:
 *
 * Input: head = [1,2,3]
 * Output: [1,2,4]
 * Example 2:
 *
 * Input: head = [0]
 * Output: [1]
 *
 *
 * Constraints:
 *
 * The number of nodes in the linked list is in the range [1, 100].
 * 0 <= Node.val <= 9
 * The number represented by the linked list does not contain leading zeros except for the zero itself.
 */



function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var plusOne = function(head) {
    let head1 = reverseLinkedList(head);
    let carry = 1;
    let dummy = new ListNode();
    let current = dummy;
    while (head1 || carry) {
        let val = carry + (head1?.val || 0);
        if (carry && !head1) {
            current.next = new ListNode(val % 10);
            current = current.next;
            break;
        }
        current.next = new ListNode(val % 10);
        current = current.next;
        carry = Math.floor(val / 10);
        head1 = head1.next;
    }
    return reverseLinkedList(dummy.next);
};


function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    let next = null;
    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}

let list1 = new ListNode(9);
list1.next = new ListNode(9);
list1.next.next = new ListNode(9);
console.log(plusOne(list1));