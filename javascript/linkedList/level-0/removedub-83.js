/**
 * 🧼 Remove Duplicates from Sorted Linked List
 * --------------------------------------------
 * Given the `head` of a **sorted singly linked list**, this function removes all duplicate
 * elements such that each element appears only once.
 *
 * 📌 Assumption:
 * - The input linked list is already sorted in non-decreasing order.
 * - Duplicates will therefore be consecutive (e.g., 1 → 1 → 2 → 3 → 3 → 4)
 *
 * ✅ Approach:
 * - Traverse the list with a single pointer (`curr`).
 * - If the current node and the next node have the same value:
 *     → Skip the next node by pointing `curr.next` to `curr.next.next`.
 * - Otherwise, move the pointer forward.
 *
 * 🔁 This process continues until the end of the list.
 *
 * 🧠 Example:
 * Input:  1 → 1 → 2 → 3 → 3
 * Output: 1 → 2 → 3
 *
 * 📦 Time Complexity: O(n)
 *     - Each node is visited once.
 *
 * 📦 Space Complexity: O(1)
 *     - No additional memory is used.
 *
 * 🏁 Returns:
 * - The head of the modified linked list with duplicates removed.
 */


const { Node } = require("./design-707");

function deleteDuplicates (head, val) {
    let curr = head;
    while (curr && curr.next) {
        if (curr.val === curr.next.val) {
            curr.next = curr.next.next
        } else {
            curr = curr.next;
        }
    }
    return head;
}