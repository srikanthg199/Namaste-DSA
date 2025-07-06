/**
 * 🔗 Merge Two Sorted Linked Lists
 * --------------------------------
 * Given the heads of two **sorted** linked lists `list1` and `list2`,
 * merge them into a single sorted linked list and return the head of the merged list.
 *
 * ✅ Assumptions:
 * - Both input lists are sorted in non-decreasing (ascending) order.
 * - The result must also be sorted.
 * - The merge should be done by **reusing the existing nodes** (in-place), not by creating new nodes.
 *
 * 🧠 Approach:
 * - Use a dummy (sentinel) node to simplify list operations.
 * - Use a pointer `curr` to build the merged list.
 * - Traverse both lists:
 *     - At each step, choose the smaller value between `list1` and `list2`.
 *     - Advance the pointer from the list where the smaller value was taken.
 * - Once one list is exhausted, link the remaining nodes of the other list.
 *
 * 🧪 Example:
 * Input:
 *   list1: 1 → 2 → 4
 *   list2: 1 → 3 → 4
 * Output:
 *   1 → 1 → 2 → 3 → 4 → 4
 *
 * 📦 Time Complexity: O(m + n)
 *     - Where m and n are the lengths of the two lists
 *
 * 📦 Space Complexity: O(1)
 *     - In-place merge using existing nodes (no extra list created)
 *
 * 🛠️ Notes:
 * - The use of a dummy (sentinel) node eliminates edge cases like handling the head separately.
 */


const { Node } = require("./design-707");

function mergeSortedLists (list1, list2) {
    let sentinel = new Node();
    let curr = sentinel;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            curr.next = list1;
            list1 = list1.next
        } else {
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next;
    }
    curr.next = list1 || list2
    return sentinel.next;
}