function highAndLow(numbers) {
    const numAr = numbers.split(" ").map((el) => +el);

    return `${Math.max(...numAr)} ${Math.min(...numAr)}`;
}
