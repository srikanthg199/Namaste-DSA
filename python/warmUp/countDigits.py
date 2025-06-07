def count_digits(n):
    if n == 0:
        return 1
    n = abs(n)
    count = 0
    while(n > 0):
        n //= 10
        count += 1
    return count

t1 = count_digits(-1025)
t2 = count_digits(259)
t3 = count_digits(0)
print(t1)
print(t2)
print(t3)
