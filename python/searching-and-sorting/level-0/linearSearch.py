def linearSearch(arr, target):
      for i in range(len(arr)):
          if arr[i] == target:
              return i
      return -1
  
arr = [4, 5, 1, 3, 9]
result = linearSearch(arr, 5)
print("Element found at index", result)
      