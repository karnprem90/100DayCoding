class QueueStack {
    constructor() {
        this.stack = [];
    }
    push(x) {
        this.stack.unshift(x);
        return this;
    }

    pop() {
        return this.stack.shift();
    }

    top() {
        return this.stack[0];
    }

    isEmpty() {
        return this.stack.length === 0;
    }
}