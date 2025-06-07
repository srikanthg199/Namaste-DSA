def reverse(n):
    rev = 0
    n_copy = n
    n = abs(n)
    while n > 0:
        rem = n % 10
        n //= 10
        rev = (rev * 10) + rem
    if (rev < -( 2 ** 31) or rev > 2 ** 31):
        return 0
    return -rev if n_copy < 0 else rev

t1 = reverse(123)
t2 = reverse(-123)
t3 = reverse(120)

print(t1)
print(t2)
print(t3)