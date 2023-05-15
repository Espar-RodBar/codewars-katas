function sumEvenNumbers(input) {
    return input.reduce((total, el) => (el % 2 ? total : total + el), 0);
}
