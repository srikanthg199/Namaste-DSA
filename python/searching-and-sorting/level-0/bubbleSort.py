def bubble(arr):
    l = len(arr)
    for i in range(l - 1):
        isSwapped = False
        for j in range(l - i - 1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                isSwapped = True
        if not isSwapped: return arr
    return arr

t1 = bubble([3, 1, 4, -1, 2])
print(t1)