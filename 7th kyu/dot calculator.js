function dotCalculator(equation) {
    const arr = equation.split(" ");
    const exp1 = arr[0].length;
    const op = arr[1];
    const exp2 = arr[2].length;

    if (op === "+") return ".".repeat(exp1 + exp2);
    if (op === "-") return ".".repeat(exp1 - exp2);

    if (op === "//") return ".".repeat(Math.floor(exp1 / exp2));
    if (op === "*") return ".".repeat(exp1 * exp2);
}
