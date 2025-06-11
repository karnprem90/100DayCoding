class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

function printLinkedList(head) {
    while(head) {
        console.log(head.data + ' ');
        head = head.next;
    }
}


function removeNthNodeFromTheEndOfLinkedList(head, N) {
    let fastPtr = head;
    let slowPtr = head;
    for (let i = 0; i < N; i++) {
        fastPtr = fastPtr.next;
    }

    if (!fastPtr) {
        return head;
    }

    while (fastPtr.next) {
        fastPtr = fastPtr.next;
        slowPtr = slowPtr.next;
    }

    let removedNode = slowPtr.next;
    slowPtr.next = slowPtr.next.next;
    removedNode = null;
    return head

}