/*
Given an integer array nums and an integer val, remove all occurrences of val in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k. To get accepted, you need to:

Modify nums such that the first k elements contain elements not equal to val.
The remaining elements beyond k do not matter.
Return k.
Examples:

Example 1:
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: The first 2 elements should be 2. Underscores represent irrelevant values.

Example 2:
Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: The first 5 elements should be any order of [0,1,4,0,3].
*/

function removeElement (nums, value) {
    let x = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== value) {
            nums[x] = nums[i]
            x++
        }
    }
    console.log(nums);
    return x;
}

const t1 = removeElement([3, 2, 2, 3], 3);
const t2 = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)

console.log(t1);
console.log(t2);
