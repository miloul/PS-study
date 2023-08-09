import sys #맞왜틀
n,m=map(int, sys.stdin.readline().split())
l1=sorted(list(map(int, sys.stdin.readline().split())))
l2=list(set(l1))
check=[0]*(n+1)
l3=[]
first=1
is_first=0
for i in range(1, n+1):
    if i not in l2:
        if is_first==0:
            check[i]=7
            is_first=1
        else:
            check[i]+=min(check[i-1]+5+2, check[i-1]+(2*(first))) #단일 추가랑 연속된다고 가정했을때 추가 비교
        first=1
    else:
        check[i]=check[i-1]
        first+=1
print(check[n])