function stringSearch(str, value) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        for (let v = 0; v < value.length; v++) {
            if (value[v] !== str[i + v]) break;
            if (v === value.length - 1) {
                count++;
            }
        }
    }

    return count;
}

console.log(stringSearch('qwertyaabcabcabcqwertyabc', 'abc'));