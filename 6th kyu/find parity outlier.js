function findOutlier(integers) {
    const even = [];
    const odd = [];
    integers.forEach((num) => (num % 2 === 0 ? even.push(num) : odd.push(num)));
    return even.length > 1 ? odd[0] : even[0];
}
