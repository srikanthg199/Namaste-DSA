/*
Write a function that reverses a string. The input string is given as an array of characters s. You must do this by modifying the input array in-place with O(1) extra memory.

Examples:

Example 1:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
  
Example 2:
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/

function reverseString (strArr) {
    const len = strArr.length
    for (let i = 0; i < len / 2; i++) {
        // swapping elem's
        [strArr[i], strArr[len - i - 1]] = [strArr[len - i - 1], strArr[i]]
    }
    return strArr
}

const t1 = reverseString(["h", "e", "l", "l", "o"])
const t2 = reverseString(["S", "r", "i", "k", "a", "n", "t", "h"])
console.log(t1);
console.log(t2);
