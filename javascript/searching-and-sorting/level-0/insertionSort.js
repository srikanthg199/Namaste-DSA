/**
 * Insertion Sort
 * --------------
 * Insertion Sort is a simple and intuitive sorting algorithm.
 * It builds the sorted array one element at a time by inserting
 * each element into its correct position in the already sorted part.
 *
 * How it works:
 * - Start from index 1 (second element) assuming the first is already sorted.
 * - Take the current element (curr) and compare it with previous elements.
 * - Shift larger elements one position to the right to make space.
 * - Insert curr at its correct position.
 * - Repeat for each element until the array is sorted.
 *
 * Example (Input: [4, 5, 1, 3, 9]):
 * Pass 1 (i = 1): curr = 5
 * → 5 > 4 → no shifting → [4, 5, 1, 3, 9]
 *
 * Pass 2 (i = 2): curr = 1
 * → 1 < 5 → shift 5 → [4, 5, 5, 3, 9]
 * → 1 < 4 → shift 4 → [4, 4, 5, 3, 9]
 * → insert 1 → [1, 4, 5, 3, 9]
 *
 * Pass 3 (i = 3): curr = 3
 * → 3 < 5 → shift 5 → [1, 4, 5, 5, 9]
 * → 3 < 4 → shift 4 → [1, 4, 4, 5, 9]
 * → insert 3 → [1, 3, 4, 5, 9]
 *
 * Pass 4 (i = 4): curr = 9
 * → 9 > 5 → no shifting → [1, 3, 4, 5, 9]
 *
 * Final Output: [1, 3, 4, 5, 9]
 *
 * Time Complexity:
 * - Best Case: O(n)     → already sorted (no shifts needed)
 * - Average/Worst: O(n²) → many shifts (e.g., reverse sorted)
 *
 * Space Complexity:
 * - O(1) → In-place sorting (no extra space used)
 *
 * Notes:
 * - Efficient for small or nearly sorted arrays
 * - Fewer comparisons than Bubble Sort in best case
 * - Easy to understand and implement
 */

function insertion (arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        let curr = arr[i];
        let prev = i - 1;
        while (arr[prev] > curr && prev >= 0) {
            arr[prev + 1] = arr[prev];
            prev--
        }
        arr[prev + 1] = curr
    }
    return arr;
}

const t1 = insertion([4, 5, 1, 3, 9])
console.log(t1); // Output: [1, 3, 4, 5, 9]
