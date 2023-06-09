var uniqueInOrder = function (iterable) {
    let lastEl = "";
    const iterableAr = Array.isArray(iterable) ? iterable : iterable.split("");
    const uniqueOrderAr = iterableAr.reduce((array, e) => {
        if (lastEl !== e) {
            lastEl = e;
            array.push(e);
        }
        return array;
    }, []);
    return uniqueOrderAr;
};
