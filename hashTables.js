// basic hashing function for refrence

function hash(key, arrayLen) {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    hash(key) {
        let total = 0;
        const WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        const hashedKey = this.hash(key);
        if (!this.keyMap[hashedKey]) {
            this.keyMap[hashedKey] = [];
        }
        this.keyMap[hashedKey].push([key, value]);
    }

    get(key) {
        const hashedKey = this.hash(key);
        if (this.keyMap[hashedKey]) {
            for (const pair of this.keyMap[hashedKey]) {
                if (pair[0] === key) return pair[1];
            }
        }
        return undefined;
    }

    keys() {
        const keysArray = [];
        for (const index of this.keyMap) {
            if (index) {
                for (const pair of index) {
                    keysArray.push(pair[0]);
                }
            }
        }

        return keysArray;
    }

    values() {
        const valuesArray = [];
        for (const index of this.keyMap) {
            if (index) {
                for (const pair of index) {
                    if (!valuesArray.includes(pair[1])) {
                        valuesArray.push(pair[1]);
                    }
                }
            }
        }

        return valuesArray;
    }
}

const ht = new HashTable(17);
ht.set('maroon', '#800000');
ht.set('yellow', '#FFFF00');
ht.set('olive', '#808000');
ht.set('salmon', '#FA8072');
ht.set('lightcoral', '#F08080');
ht.set('mediumvioletred', '#C71585');
ht.set('plum', '#DD80DD');