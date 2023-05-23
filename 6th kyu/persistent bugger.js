// only positive, of 1 or more digits
// multiply every digits until remains a 1 digit number
// every time the digits are multiplied add a counter

function persistence(num) {
    let multiPersist = 0;
    const multiplyDigits = function (value) {
        if (value > 9) {
            multiPersist += 1;
            const multiplied = value
                .toString()
                .split("")
                .reduce((total, el) => total * Number(el), 1);
            multiplyDigits(multiplied);
        }
    };
    multiplyDigits(num);
    return multiPersist;
}
