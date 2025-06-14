def moveZeros(nums):
    x = 0
    for i in range(len(nums)):
        if nums[i] != 0:
            nums[x] = nums[i]
            if i != x:
                nums[i] = 0
            x += 1
    return nums


t1 = moveZeros([0, 1, 0, 3, 12])
t2 = moveZeros([0])
print(t1)
print(t2)