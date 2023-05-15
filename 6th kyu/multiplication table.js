multiplicationTable = function (size) {
    // insert code here
    const nSize = [];
    const result = [];
    for (let i = 1; i <= size; i++) {
        nSize.push(i);
    }
    for (let x of nSize) {
        const row = [];
        for (let y of nSize) {
            row.push(x * y);
        }
        result.push(row);
    }

    return result;
};
