/*
Given a binary array nums, return the maximum number of consecutive 1’s in the array.

Examples
Example 1:
Input: nums = [1,1,0,1,1,1]
    Output: 3
    Explanation: The first two digits or the last three digits are consecutive 1s. 
The maximum number of consecutive 1s is 3.
    
Example 2:
Input: nums = [1,0,1,1,0,1]
    Output: 2
    
Constraints:
1 ≤ nums.length ≤ 105
nums[i] is either 0 or 1.
*/

function findMaxConsecutiveOnes (nums) {
    let maxOnces = 0
    let temp = 0;
    for (let num of nums) {
        if (num === 1) {
            temp++
        } else {
            maxOnces = Math.max(maxOnces, temp);
            temp = 0
        }
    }
    return Math.max(maxOnces, temp);
}

const t1 = findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])
const t2 = findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])
console.log(t1);
console.log(t2);


