def readAndEnum():
    x = list(map(int, input().split()))[1:]
    for i in range(len(x)):
        x[i] = x[i], i
    x.sort()
    return x

s = int(input())
a = readAndEnum()
b = readAndEnum()
c = readAndEnum()
c.sort(key=lambda x: (x[0], -x[1]))
flag = False

for aVal, aPos in a:
    cPos = len(c) - 1
    for bVal, bPos in b:
        while cPos > 0 and aVal + bVal + c[cPos][0] > s:
            cPos -= 1
        if aVal + bVal + c[cPos][0] == s and (not flag or (aPos, bPos, cPos) < ans):
            ans =  aVal, bVal, c[cPos][1]
            flag = True
if flag:
    print(*ans)
else:
    print(-1)