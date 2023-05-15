function alternate(n, firstValue, secondValue) {
    // your code
    const ar = [];
    for (let i = 1; i <= n; i++) {
        ar.push(i % 2 ? firstValue : secondValue);
    }
    return ar;
}
