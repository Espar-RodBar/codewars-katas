function findOdd(A) {
    //happy coding!
    const repetitions = new Map();
    A.forEach((el) => {
        repetitions.has(el)
            ? repetitions.set(el, repetitions.get(el) + 1)
            : repetitions.set(el, 1);
    });

    for (let [key, value] of repetitions) {
        console.log(key);
        if (value % 2 !== 0) return key;
    }
    return 0;
}
