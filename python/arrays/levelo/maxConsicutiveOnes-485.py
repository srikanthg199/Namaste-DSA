def findMaxConsecutiveOnes(nums):
    maxCount = 0
    currCount = 0
    for i in range(len(nums)):
        if nums[i] == 1:
            currCount += 1
        else:
            maxCount = max(maxCount, currCount)
            currCount = 0
    return max(maxCount, currCount)

t1 = findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])
t2 = findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])
print(t1)
print(t2)