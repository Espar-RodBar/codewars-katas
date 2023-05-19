function spinWords(string) {
    return string
        .split(" ")
        .map((el) => (el.length > 4 ? el.split("").reverse().join("") : el))
        .join(" ");
}
