import sys
n, m=map(int, sys.stdin.readline().strip().split())
l1=list(map(int, sys.stdin.readline().strip().split()))
max=0
for i in range(n):
    for j in range(i+1, n):
        for k in range(j+1, n):
            num=l1[i]+l1[j]+l1[k]
            if num>max and num<=m:
                max=num
print(max)