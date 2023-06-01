function domainName(url) {
    //your code here
    const urlNoProtocol = url.includes("http://")
        ? url.slice(7)
        : url.includes("https://")
        ? url.slice(8)
        : url;
    const urlNoWWW = urlNoProtocol.includes("www.")
        ? urlNoProtocol.slice(4)
        : urlNoProtocol;
    return urlNoWWW.split(".")[0];
}
