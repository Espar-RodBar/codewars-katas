function duplicateCount(text) {
    const mapped = new Map();
    let duplicates = 0;
    text.toLowerCase()
        .split("")
        .forEach((el) => {
            mapped.has(el)
                ? mapped.set(el, mapped.get(el) + 1)
                : mapped.set(el, 1);
        });
    for (const [_, value] of mapped) {
        if (value > 1) duplicates++;
    }
    return duplicates;
}
