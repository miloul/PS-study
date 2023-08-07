import sys
from collections import Counter
n=int(sys.stdin.readline().strip())
l1=[]
for i in range(n):
    l1.append(int(sys.stdin.readline().strip()))
l1.sort()
print(round(sum(l1)/n+0.0000001))
print(l1[n//2])
cnt=Counter(l1).most_common(2)
if len(cnt)>=2:
    if cnt[0][1]==cnt[1][1]:
        print(cnt[1][0])
    else:
        print(cnt[0][0])
else:
    print(cnt[0][0])
print(l1[n-1]-l1[0])