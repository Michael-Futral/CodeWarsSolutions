class SmallestIntegerFinder {
    findSmallestInt(args) {
        let first = args.sort((a, b) => a - b);
        return first[0]
    }
}