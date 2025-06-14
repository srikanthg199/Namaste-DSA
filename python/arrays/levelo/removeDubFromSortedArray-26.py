def remove_duplicates(nums):
    x = 0
    for i in range(len(nums)):
        if nums[i] > nums[x]:
            x += 1
            nums[x] = nums[i]
    return x + 1

t1 = remove_duplicates([1, 1, 2])
t2 = remove_duplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
print(t1)
print(t2)