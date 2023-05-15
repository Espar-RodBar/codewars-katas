function giveChange(amount) {
    const result = [];
    const billetes = [100, 50, 20, 10, 5, 1];
    let rest = amount;

    billetes.forEach((el) => {
        result.unshift(Math.floor(rest / el));
        rest = rest % el;
    });
    return result;
}
