// RGB To Hex Conversion
// valid values 0 - 255.
// 123456789ABCDEF0
function rgb(r, g, b) {
    const convertHex = function (value) {
        const hexStr = [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
        ];
        if (value < 16) return hexStr[value];
        const cociente = Math.floor(value / 16);
        const resto = value % 16;
        return hexStr[cociente] + convertHex(resto);
    };

    const validValue = function (value) {
        if (value > 255) return 255;
        if (value < 0) return 0;
        return value;
    };

    const rHex = convertHex(validValue(r)).padStart(2, "0");
    const gHex = convertHex(validValue(g)).padStart(2, "0");
    const bHex = convertHex(validValue(b)).padStart(2, "0");

    return rHex + gHex + bHex;
}
