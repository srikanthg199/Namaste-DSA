/*
Problem
Given a non - empty array of integers nums, every element appears twice except for one.Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Examples
Input: nums = [2, 2, 1] → Output: 1
Input: nums = [4, 1, 2, 1, 2] → Output: 4
Input: nums = [1] → Output: 1
Constraints
1 ≤ nums.length ≤ 3 × 104
    - 3 × 104 ≤ nums[i] ≤ 3 × 104
Each element appears twice except one that appears only once.
*/

/*
XOR:
XOR returns 1 only if the bits are different, otherwise returns 0.
Note: 
n ^ n = 0 -> any number XOR with itself becomes 0
n ^ 0 = a -> any number XOR with 0 stays the same
*/

function singleNumber (nums) {
    let result = 0
    for (let num of nums) {
        result ^= num
    }
    return result
};

const t1 = singleNumber([4, 1, 2, 1, 2])
console.log(t1);
