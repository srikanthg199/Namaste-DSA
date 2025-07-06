/**
 * 🧹 Remove Elements from Linked List
 * -----------------------------------
 * Given the head of a linked list and an integer `val`,
 * remove all the nodes with value equal to `val`, and return the new head.
 *
 * ✅ Approach:s
 * - Use a dummy (sentinel) node to handle edge cases (like removing the head).
 * - Traverse the list with a pointer, re-linking nodes that don't match the target value.
 *
 * 📦 Time Complexity: O(n)
 * 📦 Space Complexity: O(1)
 */

const { Node } = require("./design-707");

function removeElements (head, val) {
    const sentinel = new Node(0, head);
    let curr = sentinel;
    while (curr && curr.next) {
        if (curr.next.val === val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return sentinel.next;
}