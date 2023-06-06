// Bit Counting
// Count the 1's the number has in his binary form
// First convert to binary -> count 1s
var countBits = function (n) {
    return n
        .toString(2)
        .split("")
        .reduce((sum, el) => (sum += el === "1" ? 1 : 0), 0);
};
