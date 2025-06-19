class QueueUsingStack {
    constructor() {
        this.stack = [];
        this.stack2 = [];
    }


    enqueue(val) {
        this.stack.push(val);
    }

    dequeue() {
        if (this.stack2.length === 0) {
            while (this.stack.length > 0) {
                this.stack2.push(this.stack.pop());
            }
        }
        return this.stack2.pop();
    }

    peek() {
        if (this.stack2.length === 0) {
            while (this.stack.length > 0) {
                this.stack2.push(this.stack.pop());
            }
        }
        return this.stack2[this.stack2.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0 && this.stack2.length === 0;
    }
}

const queueUsingStack = new QueueUsingStack();
queueUsingStack.enqueue(10);
console.log(queueUsingStack);
queueUsingStack.enqueue(15);
console.log(queueUsingStack);
queueUsingStack.enqueue(20);
console.log(queueUsingStack);
queueUsingStack.dequeue();
console.log(queueUsingStack);

