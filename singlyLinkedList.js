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
}

const list = new SinglyLinkedList();
list.push('hello');
list.push('world');
list.push('haha');
list.pop();
console.log(list);