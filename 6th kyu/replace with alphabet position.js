function alphabetPosition(text) {
    return text
        .toLowerCase()
        .split("")
        .map((el) => {
            const code = el.charCodeAt(0) - 96;
            return code > 0 && code < 27 ? code : "-";
        })
        .filter((el) => el !== "-")
        .join(" ");
}
