// Simple Fun #23: Square Digits Sequence
/*
Consider a sequence of numbers a0, a1, ..., an, in which an element is equal to 
the sum of squared digits of the previous element. 
The sequence ends once an element that has already been in the sequence appears again.

*/

// function to get the sum of the digits**2
function squareDigSum(num) {
    const digits = num
        .toString()
        .split("")
        .map((el) => Number(el));
    const digitSum = digits.reduce((sum, num) => sum + num ** 2, 0);
    return digitSum;
}

function squareDigitsSequence(a0) {
    const numSequence = new Set();
    let element = a0;
    let isFound = false;

    while (!isFound) {
        // check for the element
        if (!numSequence.has(element)) numSequence.add(element);
        else isFound = true;
        console.log(element);
        // for the next iteration
        element = squareDigSum(element);
    }

    // return num of set elements + the last one occurred again
    return numSequence.size + 1;
}
