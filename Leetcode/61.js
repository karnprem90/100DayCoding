/**
 * Given the head of a linked list, rotate the list to the right by k places.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: head = [1,2,3,4,5], k = 2
 * Output: [4,5,1,2,3]
 * Example 2:
 *
 *
 * Input: head = [0,1,2], k = 4
 * Output: [2,0,1]
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
var rotateRight = function(head, k) {
    if (!head) return null;
    if (k === 0) {
        return head;
    }
    let current = head;
    let prev = head;
    let nextHead = current.next;
    let dummy = null;
    while (k) {
        while (nextHead && nextHead.next) {
            prev = prev.next;
            nextHead = nextHead.next;
        }
        prev.next = null;
        dummy = nextHead;
        if (!nextHead) {
            dummy = current;
        } else {
            dummy.next = current;
        }
        current = dummy;
        nextHead = dummy.next;
        prev = dummy;
        k--;

    }
    return current;
};

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
// head.next.next.next = new ListNode(4);
// head.next.next.next.next = new ListNode(5);

console.log(rotateRight(head, 20000000));