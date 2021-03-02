class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class doublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const node = new Node(val);

        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }

        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;

        const removed = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = removed.prev;
            this.tail.next = null;
            removed.prev = null;
        }

        this.length--;
        return removed;
    }

    shift() {
        if (this.length === 0) return undefined;

        const removed = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null
        } else {
            this.head = removed.next;
            this.head.prev = null;
            removed.next = null;
        }

        this.length--;
        return removed;
    }

    unshift(val) {
        const node = new Node(val);

        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node
        }

        this.length++;
        return this;
    }

    get(idx) {
        if (idx < 0 || idx >= this.length) return null;
        if (idx <= Math.floor(this.length / 2)) {
            let current = this.head;

            for (let i = 1; i <= idx; i++) {
                current = current.next;
            }

            return current;
        } else {
            let current = this.tail;

            for (let i = this.length - 1; i > idx; i--) {
                current = current.prev;
            }

            return current;
        }
    }

    set(idx, val) {
        const node = this.get(idx);

        if (node) {
            node.val = val;
            return true;
        }

        return false;
    }

    insert(idx, val) {
        if (idx < 0 || idx > this.length) return false;
        if (idx === 0) return !!this.unshift(val);
        if (idx === this.length) return !!this.push(val);

        const prevNode = this.get(idx - 1);
        const nextNode = prevNode.next;
        const node = new Node(val);

        prevNode.next = node;
        node.prev = prevNode;

        nextNode.prev = node;
        node.next = nextNode;

        this.length++;
        return true;
    }

    remove(idx) {
        if (idx < 0 || idx >= this.length) return undefined;
        if (idx === 0) return !!this.shift();
        if (idx === this.length - 1) return !!this.pop();

        const removed = this.get(idx);

        removed.prev.next = removed.next;
        removed.next.prev = removed.prev;

        removed.next = null;
        removed.prev = null;

        this.length--;
        return removed;
    }
}

const list = new doublyLinkedList();
list.push('hello');
list.push('im');
list.push('kyle');