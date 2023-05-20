function digitalRoot(n) {
    let total = Number(
        n
            .toString()
            .split("")
            .reduce((sum, digit) => (sum += +digit), 0)
    );
    return total > 9 ? digitalRoot(total) : total;
}
