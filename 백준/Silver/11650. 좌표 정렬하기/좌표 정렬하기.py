import sys
n=int(sys.stdin.readline().strip())
l1=[]
for _ in range(n):
    x, y=map(int, sys.stdin.readline().strip().split())
    l1.append([x,y])
l1.sort()
for i in l1:
    print(i[0], i[1])