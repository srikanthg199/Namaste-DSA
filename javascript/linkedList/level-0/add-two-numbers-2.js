/**
 * ➕ Add Two Numbers Represented as Linked Lists
 * ----------------------------------------------
 * Given two non-empty linked lists representing two non-negative integers,
 * where each node contains a single digit and the digits are stored in **reverse order**,
 * add the two numbers and return the sum as a linked list.
 *
 * 📌 Constraints:
 * - The two input numbers are stored in reverse order.
 * - Each node contains a single digit (0–9).
 * - You must return the sum as a linked list in the same reverse format.
 * - You may assume there are no leading zeros (except for the number 0 itself).
 *
 * 🧠 Approach:
 * - Initialize a dummy node to act as the result list head.
 * - Use a `carry` variable to track overflow (i.e., when sum ≥ 10).
 * - Traverse both `l1` and `l2` simultaneously:
 *     - Add digits from both lists (or 0 if one list is shorter) + carry.
 *     - Compute `sum % 10` for the new node value.
 *     - Update carry as `Math.floor(sum / 10)`.
 * - At the end, if `carry` is non-zero, add an extra node.
 *
 * 📦 Time Complexity: O(max(m, n)) — where m and n are lengths of l1 and l2
 * 📦 Space Complexity: O(max(m, n)) — for the result list
 *
 * 🧪 Example:
 * Input:
 *   l1: 2 → 4 → 3  (represents 342)
 *   l2: 5 → 6 → 4  (represents 465)
 *
 * Output:
 *   7 → 0 → 8      (represents 807 = 342 + 465)
 */


const { Node } = require("./design-707");

function addTwoNumbers (l1, l2) {
    let result = new Node();
    let curr = result;
    let carry = 0;
    while (l1 || l2 || carry) {
        let n1 = l1 ? l1.val : 0;
        let n2 = l2 ? l2.val : 0;
        let sum = n1 + n2 + carry;
        let nodeVal = sum % 10;
        carry = Math.floor(sum / 10);
        let newNode = new Node(nodeVal)
        curr.next = newNode;
        curr = curr.next
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
    }
    return result.next;
};