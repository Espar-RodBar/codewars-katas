// TODO: implement the four functions specified.
function head(ar) {
    return ar[0];
}

function tail(ar) {
    return ar.length > 1 ? ar.slice(-ar.length + 1) : [];
}

function init(ar) {
    return ar.slice(0, ar.length - 1);
}

function last(ar) {
    return ar.slice(-1)[0];
}
