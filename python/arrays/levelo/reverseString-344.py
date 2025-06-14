def reverse_string(strArr):
    l = len(strArr)
    for i in range(l // 2):
         strArr[i], strArr[l - i -1] = strArr[l - i -1], strArr[i]
    return strArr

t1 = reverse_string(["h", "e", "l", "l", "o"])
t2 = reverse_string(["S", "r", "i", "k", "a", "n", "t", "h"])
print(t1)
print(t2)