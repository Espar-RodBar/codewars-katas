function likes(names) {
    const numNames = names.length;
    let strNames = "";
    if (numNames === 0) strNames = "no one likes this";
    else if (numNames === 1) strNames = `${names[0]} likes this`;
    else if (numNames === 2) strNames = `${names[0]} and ${names[1]} like this`;
    else if (numNames === 3)
        strNames = `${names[0]}, ${names[1]} and ${names[2]} like this`;
    else {
        strNames = `${names[0]}, ${names[1]} and ${
            numNames - 2
        } others like this`;
    }
    return strNames;
}
