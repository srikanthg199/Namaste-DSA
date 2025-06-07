/*
Question: Reverse Integer with Overflow Check
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2 ** 31, 2 ** 31 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
*/

function reverse (n) {
    let rev = 0;
    const xCopy = n;
    n = Math.abs(n);
    while (n > 0) {
        rem = n % 10
        rev = (rev * 10) + rem;
        n = Math.floor(n / 10)
    }
    // if (rev < -(2 ** 31) || rev > (2 ** 31)) return 0;
    return xCopy < 0 ? -rev : rev;
}

const t1 = reverse(123)
const t2 = reverse(-123)
const t3 = reverse(120)

console.log(t1);
console.log(t2);
console.log(t3);

