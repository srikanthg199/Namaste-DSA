def remove_element(nums, value):
    x = 0
    for i in range(len(nums)):
        if nums[i] != nums[x]:
            nums[x] = nums[i]
            x +=1
    print(nums)
    return x

t1 = remove_element([3, 2, 2, 3], 3)
t2 = remove_element([0, 1, 2, 2, 3, 0, 4, 2], 2)
print(t1)
print(t2)