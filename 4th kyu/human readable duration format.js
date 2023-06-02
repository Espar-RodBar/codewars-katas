// Human readable duration format
// convert seconds to human readable string
// the last component is separed by 'and' the others by ','
// order from most relevant to less
// Years -> day -> hour -> minutes -> seconds
// 31536000 ->86400 -> 3600 -> 60 -> 0

function formatDuration(seconds) {
    const timeSecondsCost = {
        year: 31536000,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1,
    };

    const timeComponents = {
        year: 0,
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
    };

    const responseAr = [];
    let remainer = seconds;

    for (const key of Object.keys(timeComponents)) {
        timeComponents[key] = Math.floor(remainer / timeSecondsCost[key]);
        remainer = remainer % timeSecondsCost[key];
    }

    for (const key of Object.keys(timeComponents)) {
        switch (timeComponents[key]) {
            case 0:
                break;
            case 1:
            case -1:
                responseAr.push(`${timeComponents[key]} ${key}`);
                break;
            default:
                responseAr.push(`${timeComponents[key]} ${key}s`);
                break;
        }
    }
    if (responseAr.length === 0) return "now";
    if (responseAr.length === 1) return responseAr[0];
    if (responseAr.length === 2) return responseAr.join(" and ");
    else {
        return (
            responseAr.slice(0, responseAr.length - 1).join(", ") +
            " and " +
            responseAr.slice(-1)
        );
    }
}
