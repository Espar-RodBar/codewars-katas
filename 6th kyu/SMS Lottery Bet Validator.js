/* SMS Lottery Bet Validator

The text messages should contain exactly N unique numbers between 1 and M (both included),
separated by a comma (,) and/or space(s). Any other character makes the bet invalid.

If it's valid, return the chosen numbers as a list, sorted in increasing order.
 If it's invalid, return None, null, nil as appropriate to your language.
*/

function validateBet(game, text) {
    const getArray = (str) => {
        // transform ',' to spaces, and split by spaces and filter '' and convert to number
        const strAr = str.split(",").join(" ").split(" ");
        return strAr
            .map((el) => el.trim())
            .filter((el) => el !== "")
            .map((el) => +el)
            .sort((a, b) => a - b);
    };

    const isValidAr = (ar, lenEl, maxEl) => {
        const filterAr = ar.filter(
            (el) => typeof el === "number" && el <= maxEl && el > 0
        );
        // to check if no repeated elements:
        const numSet = new Set(filterAr);
        const filterArLen = filterAr.length;
        return (
            filterArLen === lenEl &&
            numSet.size === filterArLen &&
            filterArLen === ar.length
        );
    };

    const [length, maxValue] = game;
    const arrayNumbers = getArray(text);

    return isValidAr(arrayNumbers, length, maxValue) ? arrayNumbers : null;
}
