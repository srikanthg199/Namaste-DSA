const { Node } = require("./design-707");

function removeNthNode (head, n) {
    let sentinel = new Node(0, head);
    let curr = sentinel;
    for (let i = 0; i < n; i++) {
        curr = curr.next
    }
    let prev = sentinel;
    while (curr) {
        prev = prev.next;
        curr = curr.next;
    }
    prev.next = prev.next.next;
    return sentinel.next
}

function removeNthNodeV2 (head, n) {
    let sentinel = new Node(0, head);
    let i = 0;
    let prev = sentinel;
    let curr = sentinel;
    while (curr && curr.next) {
        i = i + 1;
        if (i > n) {
            prev = prev.next;
        }
        curr = curr.next;
    }
    prev.next = prev.next.next;
    return sentinel.next;
}