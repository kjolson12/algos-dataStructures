// binary Heaps are binary trees where the parent is larger than the children
// accessing a child node from parent index = 2n+1 (left node) 2n+2 (right)
// accessing a parent node from child = floor (n-1)/2

class BinaryHeap {
    constructor() {
        this.array = [];
    }

    insert(val) {
        this.array.push(val);

        const bubbleUp = () => {
            let index = this.array.length - 1;
            const element = this.array[index];

            while (index > 0) {
                let parentIndex = Math.floor((index - 1) / 2);
                const parent = this.array[parentIndex];

                if (element <= parent) break;

                this.array[parentIndex] = element;
                this.array[index] = parent;

                index = parentIndex;
            }
        }

        bubbleUp();
        return this.array;
    }

    removeRoot() {
        const temp = this.array[0];
        this.array[0] = this.array[this.array.length - 1];
        this.array[this.array.length - 1] = temp;

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

                if (leftChild > parent || rightChild > parent) {
                    if (leftChild > rightChild) {
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

const heap = new BinaryHeap();

heap.insert(5);
heap.insert(4);
heap.insert(2);
heap.insert(8);
heap.insert(3);