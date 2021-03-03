// singlyLinkedList stack
// push and pop, normally called unshift and shift

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        const node = new Node(val);

        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            node.next = this.first;
            this.first = node;
        }

        this.size++;
        return this;
    }

    pop() {
        if (this.size === 0) return undefined;

        const removed = this.first;

        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = removed.next;
            removed.next = null;
        }

        this.size--;
        return removed;
    }
}

const stack = new Stack();