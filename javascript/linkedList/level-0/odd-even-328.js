/**
 * 🧮 Odd-Even Linked List Reordering
 * ----------------------------------
 * Rearranges a singly linked list such that all nodes at **odd indices** are listed
 * before nodes at **even indices** (1-based indexing). The relative order of odd
 * and even nodes is preserved.
 *
 * 📌 Example:
 * Input:  1 → 2 → 3 → 4 → 5
 * Output: 1 → 3 → 5 → 2 → 4
 *
 * ✅ Approach:
 * - Use two pointers: `odd` (starting at head), `even` (head.next)
 * - Stitch odd nodes together, then even nodes
 * - Finally connect the end of the odd list to the start of the even list
 *
 * 📦 Time Complexity: O(n)
 * 📦 Space Complexity: O(1)
 *
 * 📁 In-place rearrangement without creating new nodes.
 */


function oddEven (head) {
    if (!head || !head.next) return head;
    let odd = head;
    let even = head.next;
    let evenHead = even;
    while (even && even.next) {
        odd.next = even.next;
        odd = odd.next;

        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head;
}