// find first unique character in a string

const firstUniqChar = s => {
    const map = {};

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            map[s[i]]++;
        } else {
            map[s[i]] = 1;
        }
    }

    for (let key in map) {
        if (map[key] === 1) {
            return s.split('').findIndex(el => el === key);
        }
    }

    return -1;
};

firstUniqChar('loveleetcode');