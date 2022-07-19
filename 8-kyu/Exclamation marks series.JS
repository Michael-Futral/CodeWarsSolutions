function remove(s, n) {
    while (n) {
        s = s.replace(/!/, "");
        n--
    }
    return s;
}