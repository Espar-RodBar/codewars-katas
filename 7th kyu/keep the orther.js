function keepOrder(ary, val) {
    // your code here
    ary.push(val);
    return ary.sort((a, b) => a - b).indexOf(val);
}
