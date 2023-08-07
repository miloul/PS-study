import sys
n=int(sys.stdin.readline().strip())
l1=list(map(int, sys.stdin.readline().strip().split()))
m=int(sys.stdin.readline().strip())
l2=list(map(int, sys.stdin.readline().strip().split()))
l1.sort()
cnt={}
for i in l1:
    if i in cnt:
        cnt[i]+=1
    else:
        cnt[i]=1
for j in l2:
    if j in cnt:
        print(cnt[j], end=' ')
    else:
        print("0", end=' ')