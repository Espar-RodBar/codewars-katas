function getMiddle(s) {
    //Code goes here!
    return s.length % 2
        ? s[Math.floor(s.length / 2)]
        : s.substring(
              Math.floor(s.length / 2) - 1,
              Math.floor(s.length / 2) + 1
          );
}
