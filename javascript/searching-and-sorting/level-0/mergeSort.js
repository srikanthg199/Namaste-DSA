/**
 * Merge Sort
 * ----------
 * Merge Sort is a popular and efficient divide-and-conquer sorting algorithm.
 * It divides the array into halves, recursively sorts them, and then merges
 * the sorted halves into a fully sorted array.
 *
 * How it works (Divide & Conquer):
 * 1. Divide: Split the array into two halves.
 * 2. Conquer: Recursively apply merge sort to each half.
 * 3. Combine: Merge the two sorted halves into one sorted array.
 *
 * Key Step – Merge:
 * - Use two pointers to compare elements from both halves.
 * - Add the smaller element to a new array.
 * - Continue until all elements are merged in sorted order.
 *
 * Example (Input: [5, 2, 4, 1]):
 * Step 1 – Divide:
 *   [5, 2, 4, 1]
 *   → [5, 2] and [4, 1]
 *   → [5] and [2] | [4] and [1]
 *
 * Step 2 – Merge:
 *   Merge [5] and [2] → [2, 5]
 *   Merge [4] and [1] → [1, 4]
 *
 * Step 3 – Final Merge:
 *   Merge [2, 5] and [1, 4]
 *   → Compare 2 and 1 → [1]
 *   → Compare 2 and 4 → [1, 2]
 *   → Compare 5 and 4 → [1, 2, 4]
 *   → Remaining 5 → [1, 2, 4, 5]
 *
 * Final Output: [1, 2, 4, 5]
 *
 * Time Complexity:
 * - Best, Average, Worst: O(n log n)
 *   → log n for divide steps, n for merging
 *
 * Space Complexity:
 * - O(n) → Extra space needed for merging
 *
 * Notes:
 * - Stable sort (maintains relative order of equal elements)
 * - Very efficient for large datasets
 * - Not in-place (uses extra memory)
 */

function merge (arr1, arr2) {
    let res = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i]);
            i++
        } else {
            res.push(arr2[j])
            j++
        }
    }
    return [...res, ...arr1.slice(i), ...arr2.slice(j)]
}

function mergeSort (arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

const arr = [1, -4, 44, 6, 90, 5, 6, 34, 65, 23, 59];
const t1 = mergeSort(arr);
console.log(t1);
