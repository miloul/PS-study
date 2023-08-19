import sys
n=int(sys.stdin.readline().strip())
l1=[]
for i in range(n):
    a, b = map(str, sys.stdin.readline().strip().split())
    l1.append([int(a), b, i])

l1.sort(key=lambda x: (x[0], x[2]))

for j in l1: #출력
    print(j[0], j[1])