/**
 * Singly Linked List Implementation in JavaScript 🧵
 * -------------------------------------------------
 * Author: Srikanth Golla
 *
 * This file implements a **Singly Linked List** from scratch using modern JavaScript (ES6+).
 * It covers all fundamental operations including insertion, deletion, traversal, reversal,
 * middle node detection, and cycle detection/creation.
 *
 * 🔍 What is a Linked List?
 * --------------------------
 * A Linked List is a linear data structure where each element (node) contains:
 *   - a value (`val`)
 *   - a reference (`next`) to the next node in the sequence
 *
 * Unlike arrays:
 *   ✅ Insertions and deletions are efficient (no shifting)
 *   ❌ Accessing elements is slower (O(n) traversal)
 *
 * This is a **singly linked list**, meaning each node points only to the next node (not backward).
 *
 * 📦 Node Structure:
 * ------------------
 * class Node {
 *   constructor(val, next = null)
 *   - val: the data value of the node
 *   - next: pointer to the next node
 * }
 *
 * 🧰 LinkedList Class - Supported Methods:
 * ----------------------------------------
 *
 * ✅ addAtHead(val)
 *    Adds a new node at the beginning of the list.
 *
 * ✅ addAtTail(val)
 *    Adds a new node at the end of the list.
 *
 * ✅ addAtIndex(index, val)
 *    Inserts a node at a specific index (0-based).
 *    Throws an error for invalid indices.
 *
 * ✅ deleteAtIndex(index)
 *    Removes the node at the given index.
 *    Throws an error for invalid indices.
 *
 * ✅ get(index)
 *    Returns the value of the node at the given index.
 *
 * ✅ printList()
 *    Prints the list visually as: 1 -> 2 -> 3 -> null
 *    Also logs the current size of the list.
 *    ⚠️ Will **not** print if the list contains a cycle.
 *
 * ✅ reverse()
 *    Reverses the entire list in-place.
 *
 * ✅ middleOfTheList()
 *    Returns the middle node of the list.
 *    Uses Floyd’s slow/fast pointer technique.
 *
 * ✅ createCycle(index)
 *    Creates a cycle in the list by connecting the last node
 *    to the node at the given index.
 *    ⚠️ Be careful: This will make traversal infinite!
 *
 * ✅ hasCycle()
 *    Detects whether the list contains a cycle.
 *    Uses Floyd’s Tortoise and Hare algorithm.
 *
 * 🧪 Example Usage:
 * -----------------
 * const linkedList = new LinkedList();
 * linkedList.addAtHead(2);         // List: 2
 * linkedList.addAtHead(1);         // List: 1 -> 2
 * linkedList.addAtIndex(2, 3);     // List: 1 -> 2 -> 3
 * linkedList.addAtIndex(2, 4);     // List: 1 -> 2 -> 4 -> 3
 * linkedList.addAtTail(5);         // List: 1 -> 2 -> 4 -> 3 -> 5
 * linkedList.addAtIndex(4, 56);    // List: 1 -> 2 -> 4 -> 3 -> 56 -> 5
 * linkedList.deleteAtIndex(2);     // Removes 4
 * linkedList.deleteAtIndex(3);     // Removes 56
 * linkedList.addAtTail(6);         // List: 1 -> 2 -> 3 -> 5 -> 6
 * linkedList.addAtTail(7);         // List: 1 -> 2 -> 3 -> 5 -> 6 -> 7
 *
 * if (linkedList.hasCycle()) {
 *     console.log("Has cycle node. Cannot print the full list.");
 * } else {
 *     linkedList.printList();      // 1 -> 2 -> 3 -> 5 -> 6 -> 7 -> null
 * }
 *
 * 💡 Bonus Ideas to Try:
 * -----------------------
 * - Implement `findNthFromEnd(n)`
 * - Support `toArray()` or `fromArray()`
 * - Create a doubly linked list version
 * - Add `removeByValue(val)`
 */


class Node {
    constructor (val, next = null) {
        this.val = val;
        this.next = next
    }
};

class LinkedList {
    constructor () {
        this.head = null;
        this.size = 0;
        this.tail = null; // optional
    }

    addAtHead (val) {
        const node = new Node(val);
        node.next = this.head;
        this.head = node;
        this.size++
    }

    addAtTail (val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next
            }
            curr.next = node;
        }
        this.size++
    }

    addAtIndex (index, val) {
        if (!index || index < 0 || index > this.size) {
            throw new Error("provide valid index")
        }
        if (index === 0) {
            return this.addAtHead(val)
        }
        else if (index === this.size) {
            return this.addAtTail(val)
        } else {
            const node = new Node(val);
            let curr = this.head
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next
            }
            const temp = curr.next;
            curr.next = node;
            node.next = temp;
        }
        this.size++
    }

    get (index) {
        if (index < 0 || index > this.size) {
            throw new Error("provide valid index")
        }
        let curr = this.head;
        for (let i = 0; i < index; i++) {
            curr = curr.next
        }
        return curr.val;
    }

    printList () {
        let curr = this.head;
        let output = "";
        while (curr) {
            output += `${curr.val} -> `;
            curr = curr.next
        }
        output += "null";
        console.log("\n");
        console.log(output, `  Size: ${this.size}`);
    }

    deleteAtIndex (index) {
        if (!index || index < 0 || index > this.size) {
            throw Error("Please provide valid index")
        }
        if (index === 0) {
            this.head = this.head.next
        } else {
            let prev = null;
            let curr = this.head;
            for (let i = 0; i < index; i++) {
                prev = curr;
                curr = curr.next
            };
            const next = curr.next;
            prev.next = next
        }
        this.size--
    }

    middleOfTheList () {
        let slow = this.head;
        let fast = this.head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    reverse () {
        let prev = null;
        let curr = this.head;
        while (curr) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        this.head = prev;
    }

    createCycle (index) {
        let cycleNode = this.head;
        for (let i = 0; i < index; i++) {
            cycleNode = cycleNode.next;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = cycleNode;
    }

    hasCycle () {
        let slow = this.head;
        let fast = this.head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow === fast) {
                return true
            }
        }
        return false
    }

    isPalindrome () {
        // Step:1 find middle
        let slow = this.head;
        let fast = this.head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        // Step:2 reverse 2nd half starting from middle
        let prev = null;
        let curr = slow;
        while (curr) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        // Step:3 Compare values 
        let first = this.head;
        let second = prev;
        let result = true
        while (first) {
            if (first.val !== second.val) {
                result = false
                break;
            }
            first = first.next;
            second = second.next
        }

        // Step 4: Restore the second half back to original(optional)
        curr = prev;
        prev = null;
        while (curr) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return result
    }
}

const linkedList = new LinkedList();
// linkedList.addAtHead(2);
// linkedList.addAtHead(1);
// linkedList.addAtIndex(2, 3)
// linkedList.addAtIndex(2, 4)
// linkedList.addAtTail(5)
// linkedList.addAtIndex(4, 56)
// linkedList.deleteAtIndex(2)
// linkedList.deleteAtIndex(3)
// linkedList.addAtTail(6)
// linkedList.addAtTail(7)
linkedList.addAtTail(1);
linkedList.addAtTail(2);
linkedList.addAtTail(3);
linkedList.addAtTail(2);
linkedList.addAtTail(1);
console.log(linkedList.isPalindrome())

// console.log(linkedList.middleOfTheList()
// linkedList.reverse()
// linkedList.createCycle(1)
if (linkedList.hasCycle()) {
    console.log("Has cycle node. Cannot print the full list.");
} else {
    linkedList.printList()
}

module.exports = { Node, LinkedList };