def selection(arr):
    l = len(arr)
    for i in range(l - 2):
        tempMin = i
        for j in range(i + 1, l):
            if arr[j] < arr[tempMin]:
                tempMin = j
        if (tempMin != i):
            arr[i], arr[tempMin] = arr[tempMin], arr[i]
    return arr

t1 = selection([4, 5, 1, 3, 9])
print(t1)