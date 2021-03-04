class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const node = new Node(val);

        if (this.root === null) {
            this.root = node;
            return this;
        } else {
            let current = this.root;

            while (true) {
                if (val === current.val) return undefined;
                if (val < current.val) {
                    if (current.left === null) {
                        current.left = node;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (val > current.val) {
                    if (current.right === null) {
                        current.right = node;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    find(val) {
        if (this.root === null) return 'empty tree';

        let current = this.root;

        while (current) {
            if (val === current.val) return current;
            if (val < current.val) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return `no node at value: ${val}`;
    }
}

const tree = new BinarySearchTree();

tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(10);
tree.insert(1);
tree.insert(2);
tree.insert(8);