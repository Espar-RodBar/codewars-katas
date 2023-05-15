function remove(string) {
    //coding and coding....
    return string
        .split(" ")
        .filter((el) => {
            let i = 0;
            el.split("").forEach((letter) => (letter === "!" ? i++ : i));
            return i !== 1 ? el : "";
        })
        .join(" ");
}
