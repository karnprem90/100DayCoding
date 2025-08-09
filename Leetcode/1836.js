/**
 * Given the head of a linked list, find all the values that appear more than once in the list and delete the nodes that have any of those values.
 *
 * Return the linked list after the deletions.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: head = [1,2,3,2]
 * Output: [1,3]
 * Explanation: 2 appears twice in the linked list, so all 2's should be deleted. After deleting all 2's, we are left with [1,3].
 * Example 2:
 *
 *
 * Input: head = [2,1,1,2]
 * Output: []
 * Explanation: 2 and 1 both appear twice. All the elements should be deleted.
 * Example 3:
 *
 *
 * Input: head = [3,2,2,1,3,2,4]
 * Output: [1,4]
 * Explanation: 3 appears twice and 2 appears three times. After deleting all 3's and 2's, we are left with [1,4].
 *
 *
 * Constraints:
 *
 * The number of nodes in the list is in the range [1, 105]
 * 1 <= Node.val <= 105
 */


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicatesUnsorted = function(head) {
    let map = new Map();
    let current = head;
    while(current) {
        let val = current.val;
        map.set(val, (map.get(val) || 0) + 1);
        current = current.next;
    }
    let dummy = new ListNode(0);
    let newList = dummy;
    for (let [key, val] of map) {
        console.log('key', key, val);
        if (val > 1) {
            continue;
        }
        newList.next = new ListNode(key);
        newList = newList.next;
    }
    return dummy.next;
};

let head =  new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(1);

console.log(deleteDuplicatesUnsorted(head));