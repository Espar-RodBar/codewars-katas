// The Hashtag generator
// str > 140 -> false if input or output is empty -> false
// return split first, and return # + firstletter Upper + rest all joined("")
function generateHashtag(str) {
    const arrayWords = str.split(" ");
    const hashtag =
        "#" +
        arrayWords
            .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
            .join("");
    if (hashtag.length > 140 || hashtag.length === 1) return false;
    return hashtag;
}
