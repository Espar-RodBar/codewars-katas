function squareDigits(num) {
    return +`${num}`
        .split("")
        .map((el) => `${el ** 2}`)
        .join("");
}
