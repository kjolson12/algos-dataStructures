// priority queue is a type of binary heap

// there is a bug in deQueue, if left or right Child is null then
// a typeError will throw, 'Cannot read property 'priority' of null'

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.array = [];
    }

    enQueue(val, priority) {
        const node = new Node(val, priority);

        this.array.push(node);

        const bubbleUp = () => {
            let index = this.array.length - 1;
            const element = this.array[index];

            while (index > 0) {
                const parentIndex = Math.floor((index - 1) / 2);
                const parent = this.array[parentIndex];

                if (element.priority > parent.priority) break;

                this.array[parentIndex] = element;
                this.array[index] = parent;

                index = parentIndex;
            }
        }

        bubbleUp();
        return this.array;
    }

    deQueue() {
        const root = this.array[0];

        // need to swap the root and the last element before popping
        this.array[0] = this.array[this.array.length - 1];
        this.array[this.array.length - 1] = root;

        const removed = this.array.pop();

        const bubbleDown = () => {
            let parentIndex = 0;

            while (true) {
                const parent = this.array[parentIndex];

                const leftChildIndex = 2 * parentIndex + 1;
                let leftChild = null;
                if (leftChildIndex < this.array.length) {
                    leftChild = this.array[leftChildIndex];
                }

                const rightChildIndex = 2 * parentIndex + 2;
                let rightChild = null;
                if (rightChildIndex < this.array.length) {
                    rightChild = this.array[rightChildIndex];
                }

                if (leftChild.priority < parent.priority || rightChild.priority < parent.priority) {
                    if (leftChild.priority < rightChild.priority) {
                        this.array[parentIndex] = leftChild;
                        this.array[leftChildIndex] = parent;
                        parentIndex = leftChildIndex;
                    } else {
                        this.array[parentIndex] = rightChild;
                        this.array[rightChildIndex] = parent;
                        parentIndex = rightChildIndex;
                    }
                } else break;
            }
        }

        bubbleDown();
        return removed;
    }
}

const priorityQ = new PriorityQueue();

priorityQ.enQueue('clean litter', 5);
priorityQ.enQueue('feed posie', 1);
priorityQ.enQueue('go to gym', 3);
priorityQ.enQueue('shower', 2);
priorityQ.enQueue('take out trash', 4);