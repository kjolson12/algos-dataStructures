// a function that takes a string and returns an object that counts each character

const charCount = str => {
    const string = str.toLowerCase();
    const result = {};

    for (let i = 0; i < string.length; i++) {
        const char = string[i];

        if (/[a-z0-9]/.test(char)) {
            if (result[char] > 0) {
                result[char]++;
            } else {
                result[char] = 1;
            };
        };
    };
    return result;
};

// or

const charCount2 = str => {
    const result = {};

    for (let char of str) {
        char = char.toLowerCase();

        if (/[a-z0-9]/.test(char)) {
            result[char] ? result[char]++ : result[char] = 1;
        }
    }

    return result;
}

console.log(charCount2('hello HELLO!'));