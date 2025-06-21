class MergeSort():
    def sort(self,arr):
        l = len(arr)
        if l <= 1: return arr
        mid = l // 2
        left = self.sort(arr[:mid])
        right = self.sort(arr[mid:])
        return self.merge(left, right)
    
    def merge(self, arr1, arr2):
        i, j = 0, 0
        res = []
        while i < len(arr1) and j < len(arr2):
            if arr1[i] < arr2[j]:
                res.append(arr1[i])
                i += 1
            else:
                res.append(arr2[j])
                j += 1
        res.extend(arr1[i:])
        res.extend(arr2[j:])
        return res

arr = [1, -4, 44, 6, 90, 5, 6, 34, 65, 23, 59]
ms = MergeSort()
sorted_arr = ms.sort(arr)
print(sorted_arr)