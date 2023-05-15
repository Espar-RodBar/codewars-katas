function descendingOrder(n) {
    const result = +`${n}`
        .split("")
        .sort((a, b) => +b - a)
        .join("");
    return result;
}
