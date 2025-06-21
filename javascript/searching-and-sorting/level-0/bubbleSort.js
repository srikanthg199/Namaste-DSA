/**
 * Bubble Sort
 * -----------
 * Bubble Sort is a simple comparison-based sorting algorithm.
 * It works by repeatedly swapping adjacent elements if they are in the wrong order.
 * After each pass, the largest unsorted element "bubbles up" to its correct position.
 *
 * Approach:
 * 1. Loop through the array multiple times.
 * 2. In each pass, compare each pair of adjacent elements:
 *    - If arr[j] > arr[j + 1], swap them.
 * 3. Use a flag (isSwapped) to track if any swaps were made during a pass.
 *    - If no swaps are made, the array is already sorted → exit early (optimization).
 * 4. Repeat for n - 1 passes or until no swaps are needed.
 *
 * Example:
 * Input: [3, 1, 4]
 * Pass 1:
 * - Compare 3 and 1 → swap → [1, 3, 4]
 * - Compare 3 and 4 → no swap
 * Pass 2:
 * - Compare 1 and 3 → no swap
 * → No swaps → array is sorted
 *
 * Time Complexity:
 * - Best Case: O(n) → already sorted array (with optimization)
 * - Worst Case: O(n²) → reverse sorted array
 *
 * Space Complexity:
 * - O(1) → In-place sorting (no extra space used)
 *
 * Notes:
 * - Easy to understand and implement
 * - Not efficient for large datasets
 * - Performs many swaps, unlike Selection Sort
 */

function bubble (arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let isSwapped = false
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap adjacent elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                isSwapped = true
            }
        }
        // If no swaps in this pass, the array is sorted
        if (!isSwapped) break
    }
    return arr;
}

const t1 = bubble([3, 1, 4, -1, 2]);
console.log(t1); // Output: [-1, 1, 2, 3, 4]