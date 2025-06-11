class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

function addTwoNumberInLinkedList(l1, l2) {
    let carry = 0;
    let node = new Node();
    let current = node;
    while (l1 || l2 || carry) {
        let sum = carry;
        if (l1) {
            sum += l1.data;
            l1 = l1.next;
        }

        if (l2) {
            sum += l2.data;
            l2 = l2.next;
        }

        current.next = new Node(sum % 10);
        carry = Math.floor(sum / 10);
        current = current.next;
    }
    return node.next;
}

const node1 = new Node(2);
node1.next = new Node(4);
node1.next.next = new Node(3);

const node2 = new Node(5);
node2.next = new Node(6);
node2.next.next = new Node(4);


console.log(addTwoNumberInLinkedList(node1, node2));
