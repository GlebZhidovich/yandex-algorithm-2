n = int(input())

result = ''
boxes = {}

for i in range(n):
  d, a = list(map(int, input().split()))
  if d in boxes:
    prev = boxes[d]
    boxes[d] = a + prev
  else:
    boxes[d] = a

sortedDict = dict(sorted(boxes.items()))

for key in sortedDict:
  result += str(key) + ' ' + str(sortedDict[key]) + '\n'

print(result)