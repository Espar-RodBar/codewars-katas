function arrayDiff(a, b) {
    return a.reduce((array, el) => {
        if (!b.includes(el)) array.push(el);
        return array;
    }, []);
}
