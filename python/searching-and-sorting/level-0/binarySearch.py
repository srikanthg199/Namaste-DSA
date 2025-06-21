def binarySearch(arr, target):
    left = 0
    right = len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if target == arr[mid]:
            return mid
        elif target < arr[mid]:
            right = mid - 1
        else:
            left = mid + 1
    return -1

t1 = binarySearch([1, 3, 5, 7, 9], 7)
print(t1)
