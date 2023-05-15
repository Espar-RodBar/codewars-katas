function accum(s) {
    // your code
    return s
        .split("")
        .map(
            (letter, i) =>
                `${letter.toUpperCase()}${letter.toLowerCase().repeat(i)}`
        )
        .join("-");
}
