/*
Question: Find the Second Largest Number in an Array
Write a function secondLargest(arr) that takes an array of numbers and returns the second largest unique number in the array.

Requirements
The array must contain at least two numbers.
If the array contains all equal elements or only one unique element, return: "No second largest found"
If the array has less than two elements, return: "Array should have at least two numbers"
Constraints
Time Complexity: O(n) (Single pass through the array)
Space Complexity: O(1)
Examples
Input: [0, 3, 5, 2, 7, 9]
Output: 7

Input: [4, 4, 4, 4]
Output: "No second largest found"

Input: [5]
Output: "Array should have at least two numbers"

Input: [10, 20]
Output: 10
*/

function secondLargest (array) {
    if (array.length < 2) return "Array should have at least two numbers"
    let largest = -Infinity
    let secondLargest = -Infinity
    for (let num of array) {
        if (num > largest) {
            secondLargest = largest;
            largest = num
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num
        }
    }
    return secondLargest === -Infinity ? "No second largest found" : secondLargest
}

const t1 = secondLargest([0, 3, 5, 2, 7, 9])
const t2 = secondLargest([4, 4, 4, 4, 4])
const t3 = secondLargest([10, 20])

console.log(t1);
console.log(t2);
console.log(t3);


