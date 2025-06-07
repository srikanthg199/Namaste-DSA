def is_palindrome(n):
    if n < 0:
        return False
    n_copy = n
    rev = 0
    while n > 0 :
        rem = n % 10
        rev = (rev * 10) + rem 
        n //= 10
    return rev == n_copy

t1 = is_palindrome(121)
t2 = is_palindrome(-121)
t3 = is_palindrome(10)

print(t1)
print(t2)
print(t3)