function multiple(x) {
    // Good Luck
    let resp;
    if (x % 3 == 0 && x % 5 == 0) resp = "BangBoom";
    else if (x % 3 == 0) resp = "Bang";
    else if (x % 5 == 0) resp = "Boom";
    else resp = "Miss";
    return resp;
}
