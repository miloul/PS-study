import sys
n=int(sys.stdin.readline().strip())
l=[]
for i in range(0, n):
    l.append(int(sys.stdin.readline().strip()))
l.sort()
for i in range(n):
    print(l[i])
