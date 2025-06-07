/* 
Write a function countDigits(n) that takes an integer n and returns how many digits it contains.

Requirements
Handles both positive and negative integers.
Return 1 if n is 0 (since 0 is a single-digit number).
Constraints
Time Complexity: O(log₁₀(n)) — Each division reduces one digit.
Space Complexity: O(1) — Only a few variables are used.
Examples
Input: 259
Output: 3

Input: -1035
Output: 4

Input: 0
Output: 1
*/
function countDigits (n) {
    if (n === 0) return 1;
    let count = 0
    n = Math.abs(n)
    while (n > 0) {
        n = Math.floor(n / 10);
        count++
    }
    return count
}
const t1 = countDigits(-1025)
const t2 = countDigits(259)
const t3 = countDigits(0)
console.log(t1);
console.log(t2);
console.log(t3);


