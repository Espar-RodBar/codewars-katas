function tribonacci(signature, n) {
    //your code here
    const trib = [];

    if (n > 0) {
        for (let j = 0; j < 3 && j < n; j++) {
            trib.push(signature[j]);
        }

        for (let i = 0; i < n - 3; i++) {
            trib.push(trib[i] + trib[i + 1] + trib[i + 2]);
        }
    }

    return trib;
}
