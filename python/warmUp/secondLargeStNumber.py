def second_largest(array):
    if (len(array) < 2):
        return "Array should have at least two numbers"
    largest = float('-inf')
    second_largest = float('-inf')
    for num in array:
        if (num > largest):
            second_largest = largest
            largest = num
        elif (num > second_largest and num != largest):
            second_largest = num
    return second_largest if second_largest != float('-inf') else "No second largest found"

t1 = second_largest([0, 3, 5, 2, 7, 9])
t2 = second_largest([4, 4, 4, 4, 4])
t3 = second_largest([10, 20])
print(t1)
print(t2)
print(t3)