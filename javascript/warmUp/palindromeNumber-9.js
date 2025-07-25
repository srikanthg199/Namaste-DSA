/*
Given an integer x, return true if x is a palindrome, and false otherwise.
Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:
-231 <= x <= 231 - 1
*/

function isPalindrome (n) {
    if (n < 0) return false;
    const nCopy = n;
    let rev = 0
    while (n > 0) {
        let rem = n % 10;
        rev = (rev * 10) + rem
        n = Math.floor(n / 10);
    }
    return nCopy === rev
}

const t1 = isPalindrome(121)
const t2 = isPalindrome(-121)
const t3 = isPalindrome(10)

console.log(t1);
console.log(t2);
console.log(t3);
