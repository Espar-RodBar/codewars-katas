function rotate(str) {
    const scrollerBuffer = str ? [str] : [];
    for (let i = 0; i < str.length - 1; i++) {
        const tempStr = scrollerBuffer[0];
        const tempLength = tempStr.length;
        const shiftedStr =
            tempStr.slice(tempLength - 1) + tempStr.slice(0, tempLength - 1);
        scrollerBuffer.unshift(shiftedStr);
    }

    return scrollerBuffer;
}
