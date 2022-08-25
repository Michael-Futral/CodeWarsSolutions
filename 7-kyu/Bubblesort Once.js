const bubblesortOnce = function ([head, ...tail]) {

    return tail.reduce((acc, num) => {
        if (head < num) {
            [head, num] = [num, head];
        }
        return [...acc, num];
    }, [])
        .concat(head || []);
};