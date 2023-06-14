function sortArray(array) {
    // Return a sorted array.
    const pares = array.map((el) => (el % 2 === 0 ? el : null));
    const impares = array.filter((el) => el % 2 !== 0).sort((a, b) => a - b);
    const sorted = pares.map((el) => (el === null ? impares.shift() : el));

    return sorted;
}
