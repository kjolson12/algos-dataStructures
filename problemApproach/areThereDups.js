function areThereDuplicates() {
    const result = {};

    for (let arg of arguments) {
        result[arg] ? result[arg]++ : result[arg] = 1;
    }

    console.log(result);

    for (let key in result) {
        if (result[key] > 1) {
            return true
        }
    }

    return false
}

console.log(areThereDuplicates('a', 'c', 'b', 'e', 'd', 'a'));