function narcissistic(value) {
    // Code me to return true or false
    const valueDigitsAr = value.toString().split("");
    const digits = valueDigitsAr.length;
    const poweredVal = valueDigitsAr.reduce(
        (total, el) => (total += Number(el) ** digits),
        0
    );

    return value === poweredVal;
}
