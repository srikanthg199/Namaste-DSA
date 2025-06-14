def max_profit(prices):
    min_price = float('inf')
    max_profit = 0
    for price in prices:
        if price < min_price:
            min_price = price
        if price - min_price > max_profit:
            max_profit = price - min_price
    return max_profit

t1 = max_profit([7, 1, 5, 3, 6, 4])
t2 = max_profit([7, 6, 4, 3, 1])
print(t1)
print(t2)