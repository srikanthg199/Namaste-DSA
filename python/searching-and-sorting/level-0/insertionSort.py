def insertion(arr):
    l = len(arr)
    for i in range(1,l):
        curr = arr[i]
        position = i
        for j in reversed(range(0, i)):
            if arr[j] > curr:
                arr[j+1] = arr[j]
                position = j
            else:
                break
        arr[position] = curr
    return arr

t1 = insertion([4, 5, 1, 3, 9])
print(t1)

