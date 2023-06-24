function XO(str) {
    const ar = str.toUpperCase().split("");
    const x = ar.filter((el) => el === "X").length;
    const o = ar.filter((el) => el === "O").length;
    return x === o;
}
