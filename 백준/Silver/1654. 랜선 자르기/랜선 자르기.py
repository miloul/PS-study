k,n=map(int, input().split())
l1=[]
m=0
for i in range(k):
    a=int(input())
    l1.append(a)

start, end=1,max(l1)
while start<=end:
    r=0
    mid=(start+end)//2
    for i in range(k):
        r+=l1[i]//mid
    if r>=n:
        start=mid+1
    else:
        end=mid-1
print(end)