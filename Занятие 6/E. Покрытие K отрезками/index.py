def bynarySearch(l, r, check, parmas, k ):
    while r > l:
        mid = (r + l) // 2

        if check(mid, parmas, k):
            r = mid
        else:
            l = mid + 1
    return l

def getCoverAmount(l, nums):
    cnt = 0
    maxRight = nums[0] - 1
    for  num in nums:
        if num > maxRight:
            cnt += 1
            maxRight = num + l
    return cnt


def checkAmount(l, nums, k):
    amount = getCoverAmount(l, nums)
    return amount <= k


def coverSegments(nums, k):
    l = 0
    r = x[-1] - x[0]
    amount = bynarySearch(l, r, checkAmount, nums, k)
    return amount

n, k = map(int, input().split())
x = list(map(int, input().split()))
x.sort()
left = coverSegments(x, k)
print(left)