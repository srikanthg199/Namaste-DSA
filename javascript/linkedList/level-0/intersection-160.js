
/**
 * 🔗 Linked List Intersection Detection
 * -------------------------------------
 * Goal: Find the node where two singly linked lists intersect (by reference, not value).
 * If no intersection exists, return null.
 *
 * 🚨 Key Notes:
 * - Two lists may be of different lengths.
 * - Intersection means two nodes share the same memory reference (not just same value).
 * - No cycles are present in the linked lists.
 *
 * 🧠 Approach 1: Hash Set (Brute Force with Extra Space)
 * -----------------------------------------------------
 * - Traverse list A and store all node references in a Set.
 * - Traverse list B, and return the first node found in the Set.
 *
 * ✅ Time Complexity: O(m + n)
 * ✅ Space Complexity: O(m)
 * 🟡 Pros: Simple and easy to implement
 * 🔴 Cons: Uses extra space
 *
 * 🧠 Approach 2: Two Pointer Technique (Optimized, No Extra Space)
 * ---------------------------------------------------------------
 * - Initialize two pointers, one at each list head.
 * - Traverse each list; when a pointer reaches the end, switch it to the head of the other list.
 * - If an intersection exists, the pointers will meet at the node; otherwise, both reach null.
 *
 * ✅ Time Complexity: O(m + n)
 * ✅ Space Complexity: O(1)
 * 🟢 Pros: Optimal and elegant
 * 🟡 Cons: Slightly tricky to understand at first
 *
 * 🏁 Recommendation:
 * Use the two-pointer technique for interviews and production — it's clean, efficient, and requires no extra memory.
 */


//Solution-1 using hash map/set
function intersectionMap (headA, headB) {
    let set = new Set();
    let curr = headA
    while (curr) {
        set.add(curr)
        curr = curr.next
    }
    curr = headB
    while (curr) {
        if (set.has(curr)) {
            return curr
        }
        curr = curr.next;
    }
    return null;
}

// Optimized
function intersection (headA, headB) {
    let a = headA;
    let b = headB;
    while (a !== b) {
        a = a ? a.next : headB;
        b = b ? b.next : headA;
    }
    return a;
}