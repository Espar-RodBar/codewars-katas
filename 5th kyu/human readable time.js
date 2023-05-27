//Write a function, which takes a non-negative integer (seconds) as input and returns
//the time in a human-readable format (HH:MM:SS)
// HH 0->99 MM & SS 0->59
// get the seconds and calculate de remaining sec and minuts, and later min and hours
// convert to string and fill less than 2 digits with 0 in the left spot
function humanReadable(seconds) {
    const date = {
        h: null,
        m: null,
        s: null,
    };

    let s = seconds % 60;
    let m = Math.floor(seconds / 60) % 60;
    let h = Math.floor(seconds / 3600);

    date["s"] = s.toString().padStart(2, "0");
    date["m"] = m.toString().padStart(2, "0");
    date["h"] = h.toString().padStart(2, "0");

    return `${date["h"]}:${date["m"]}:${date["s"]}`;
}
