/**
 * Selection Sort
 * --------------
 * Selection Sort is a simple comparison-based sorting algorithm.
 * It divides the array into two parts:
 * - Sorted part (initially empty)
 * - Unsorted part (initially the entire array)
 *
 * In each iteration:
 * - Find the minimum element in the unsorted part.
 * - Swap it with the first unsorted element.
 * - This grows the sorted part by one element.
 *
 * Approach:
 * 1. Loop from index i = 0 to n - 2:
 *    - Assume the current index i holds the smallest element.
 *    - Loop from j = i + 1 to n - 1 to find the true minimum.
 *    - If a smaller element is found, update the min index.
 *    - After inner loop, swap element at i with element at min index (if different).
 * 2. Repeat until the array is fully sorted.
 *
 * Example:
 * Input: [4, 5, 1, 3, 9]
 * Step-by-step:
 * - i = 0 → min = 2 (value 1) → swap with index 0 → [1, 5, 4, 3, 9]
 * - i = 1 → min = 3 (value 3) → swap with index 1 → [1, 3, 4, 5, 9]
 * - i = 2 → min = 2 (value 4) → already in place → [1, 3, 4, 5, 9]
 * - i = 3 → min = 3 (value 5) → already in place → [1, 3, 4, 5, 9]
 *
 * Time Complexity:
 * - Best, Average, and Worst Case: O(n²)
 *   → Roughly n*(n-1)/2 comparisons in all cases
 *
 * Space Complexity:
 * - O(1) → In-place sorting (no extra space required)
 *
 * Notes:
 * - Simple to understand but not efficient for large datasets
 * - Performs fewer swaps than Bubble Sort (good in environments with expensive swaps)
 */

function selection (arr) {
    const n = arr.length
    for (let i = 0; i < n - 1; i++) {
        let min = i
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) min = j
        }
        if (min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[i]] // Swap
        }
    }
    return arr
}

const t1 = selection([4, 5, 1, 3, 9]);
console.log(t1); // Output: [1, 3, 4, 5, 9]
