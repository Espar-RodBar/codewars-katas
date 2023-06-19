function high(x) {
    const alphab = "abcdefghijklmnopqrstuvwxyz";
    function wordScore(word) {
        return word
            .split("")
            .reduce((total, el) => (total += alphab.indexOf(el) + 1), 0);
    }
    const highScore = { str: "", scr: 0 };
    x.split(" ").forEach((word) => {
        const score = wordScore(word);
        if (score > highScore["scr"]) {
            highScore.str = word;
            highScore["scr"] = score;
        }
    });
    return highScore.str;
}
