// Number of trailing zeros of N!
// Count multiples of 5, 5**1, 5**2 .. until n<5**k

function zeros(n) {
    let trailingZeros = 0;
    let exponent = 1;
    while (n >= 5 ** exponent) {
        trailingZeros += Math.floor(n / 5 ** exponent);
        exponent++;
    }

    return trailingZeros;
}
