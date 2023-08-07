import sys
m,n=map(int, sys.stdin.readline().strip().split())
l1=[True]*(n+1)
l1[0]=l1[1]=False
for i in range(2, n+1):
    if l1[i]==True:
        for j in range(i+i, n+1, i):
            l1[j]=False
for k in range(m, n+1):
    if l1[k]==True:
        print(k)