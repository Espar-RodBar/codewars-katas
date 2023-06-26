// Playing with digits
/*
Given a positive integer n written as
abcd... (a, b, c, d... being digits) and a positive integer p
find a positive integer k, if it exists, such that the sum of
the digits of n taken to the successive powers of p is equal to k * n.
*/

function digPow(n, p) {
    const succesivePower = (array, power) => {
        const numPow = Number(array[0]) ** power;
        if (array.length === 0) return 0;
        return numPow + succesivePower(array.slice(1), power + 1);
    };
    // Calculate the succesive power of the number:
    // 1.- split the digits
    // 2.- recursive calculation of each digit and add to a total
    const numberList = n.toString().split("");
    const powN = succesivePower(numberList, p);

    // 3.- Calculate the product value by "n" needed to get the same  of succesivePower
    const multN = powN / n;
    return Number.isInteger(multN) ? multN : -1;
}
