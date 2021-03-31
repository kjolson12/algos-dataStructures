const reverse = function (x) {
    const string = x.toString();

    for (let i = 0; i < (string.length / 2); i++) {
        const temp = string[i];
        string[i] = string[string.length - 1 - i];
        string[string.length - 1 - i] = temp;
    }

    return parseInt(string);
};

reverse(123);