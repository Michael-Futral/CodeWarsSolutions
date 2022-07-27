function Node(data) {
    this.data = data;
    this.next = null;
}

function length(head) {
    let len = 1

    if (!head) {
        return 0
    }

    while (head.next) {
        len++
        head = head.next
    }
    return len
}

function count(head, data) {
    if (!head) {
        return 0
    }

    let count = 0;

    while (head.next) {
        if (head.data == data) {
            count++
        }
        head = head.next
    }

    if (head.data === data) {
        count++
    }

    return count

}