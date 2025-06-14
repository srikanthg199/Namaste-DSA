def merge(nums1, m, nums2, n):
    p1 = m-1
    p2 = n-1
    for i in reversed(range(0, m + n)):
        if p2 < 0:
            break
        if(p1 >= 0 and nums1[p1] > nums2[p2]):
            nums1[i] = nums1[p1]
            p1 -= 1
        else:
            nums1[i] = nums2[p2]
            p2 -= 1
    return nums1


t1 = merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
print(t1)