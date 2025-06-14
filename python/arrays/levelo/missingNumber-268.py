def missingNumber(nums):
    l = len(nums)
    total_sum = (l * (l + 1)) // 2
    sum_of_array = sum(nums)
    return total_sum - sum_of_array

t1 = missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])
print(t1)