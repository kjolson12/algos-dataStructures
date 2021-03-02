class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const node = new Node(val);

        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        }

        this.tail.next = node;
        this.tail = node;
        this.length++;

        return this
    }

    pop() {
        if (this.length === 0) return undefined;

        let current = this.head;
        let previous = current;

        while (current != this.tail) {
            previous = current;
            current = current.next;
        }

        this.tail = previous;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    shift() {
        if (this.length === 0) return undefined;

        const removed = this.head;
        this.head = this.head.next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return removed;
    }

    unshift(val) {
        const node = new Node(val);

        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.length++;

        return this;
    }

    get(idx) {
        if (idx < 0 || idx >= this.length) {
            return null;
        }

        let current = this.head;

        for (let i = 1; i <= idx; i++) {
            current = current.next;
        }

        return current;
    }

    set(idx, val) {
        const node = this.get(idx);

        if (node) {
            node.val = val;
            return true;
        } else {
            return false;
        }
    }

    insert(idx, val) {
        if (idx < 0 || idx > this.length) {
            return false;
        } else if (idx === 0) {
            this.unshift(val);
            return true;
        } else if (idx === this.length) {
            this.push(val);
            return true;
        } else {
            const newNode = new Node(val);
            const preNode = this.get(idx - 1);
            const preNext = preNode.next;
            preNode.next = newNode;
            newNode.next = preNext;

            this.length++;
            return true;
        }
    }

    remove(idx) {
        if (idx < 0 || idx >= this.length) return false;
        if (idx === this.length - 1) return !!this.pop();
        if (idx === 0) return !!this.shift();

        const prevNode = this.get(idx - 1);
        prevNode.next = prevNode.next.next;

        this.length--;
        return true;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let nodePrev = null;
        let nodeNext;

        for (let i = 0; i < this.length; i++) {
            nodeNext = node.next;
            node.next = nodePrev;
            nodePrev = node;
            node = nodeNext;
        }

        return this;
    }
}

const list = new SinglyLinkedList();
list.push('hello');
list.push('world');
list.push('haha');