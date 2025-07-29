/**
 * You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: l1 = [7,2,4,3], l2 = [5,6,4]
 * Output: [7,8,0,7]
 * Example 2:
 *
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [8,0,7]
 * Example 3:
 *
 * Input: l1 = [0], l2 = [0]
 * Output: [0]
 *
 */



function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head1 = reverseLL(l1);
    let head2 = reverseLL(l2);
    let carry = 0;
    let newNode = new Node();
    while (head1 && head2) {
        let sum = carry + head1.val + head2.val;
        if (sum > 9) {
            carry = Math.floor( sum / 10);
        }
        newNode.val = sum % 10;
        newNode.next = new Node();
        head1 = head1.next;
        head2 = head2.next;
    }

    while(head1 && carry) {
        newNode.val = carry + head1.val;
        newNode.next = new Node();
        head1 = head1.next;
    }

    while (head2 && carry) {
        newNode.val = carry + head2.val;
        newNode.next = new Node();
        head2 = head2.next;
    }
};

var reverseLL = function(head) {
    let prev = null;
    let current = head;
    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    head = prev;
    return head;
}

const node = new ListNode(7);
node.next = new ListNode(2);
node.next.next = new ListNode(4);
node.next.next.next = new ListNode(3);

console.log(addTwoNumbers(node));