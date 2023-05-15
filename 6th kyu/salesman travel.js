function travel(r, zipcode) {
    const addresses = new Map();
    r.split(",").forEach((el) => {
        const element = el.split(" ");
        const key = element.slice(-2).join(" ");
        const value = [
            element.slice(1, element.length - 2).join(" "),
            "/",
            element[0],
        ];
        if (addresses.has(key)) {
            const newValue = addresses.get(key);
            addresses.set(key, [
                newValue[0] + "," + value[0],
                "/",
                newValue[2] + "," + value[2],
            ]);
        } else addresses.set(key, value);
    });
    for (let [key, value] of addresses.entries()) {
        if (zipcode === key) return `${key}:${value.join("")}`;
    }

    return `${zipcode}:/`;
}
