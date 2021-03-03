// singlyLinkedList Queue
// add to the end and remove from the beginning
// enQueue is push and deQueue is shift;

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enQueue(val) {
        const node = new Node(val);

        if (this.size === 0) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }

        this.size++;
        return this;
    }

    deQueue() {
        const removed = this.first;

        if (this.size === 0) return null;
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

const queue = new Queue();