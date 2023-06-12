function order(words) {
    const wordsSplit = words.split(" ");
    const wordsLen = wordsSplit.length;
    const orderedWords = new Array(wordsLen);
    wordsSplit.forEach((word) => {
        for (let i = 1; i <= wordsLen; i++) {
            if (word.includes(i.toString())) orderedWords[i - 1] = word;
        }
    });
    return orderedWords.join(" ");
}
