def singleNumber(nums):
    result = 0
    for num in nums:
        result ^= num
    return result

t1 = singleNumber([4, 1, 2, 1, 2])
print(t1)